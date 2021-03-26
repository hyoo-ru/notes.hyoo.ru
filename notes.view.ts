namespace $.$$ {
	
	export class $hyoo_notes extends $.$hyoo_notes {

		pages() {
			return [
				this.Tags_page() ,
				this.Notes_page( this.tag() ) ,
				... this.note() ? [ this.Note_page( this.note() ) ] : [] ,
				... this.tagging() ? [ this.Tagging_page() ] : [] ,
			]
		}

		note_ids( next? : string[] ) {
			return this.$.$mol_state_local.value( 'note_ids' , next ) || []
		}
		
		note_tags( id : string , next? : string[] | null ) {
			return this.$.$mol_state_local.value( `note=${id}.tags` , next ) || []
		}
		
		note( next? : string | null ) {
			return this.$.$mol_state_arg.value( 'note' , next )
		}

		note_content( note : string , next? : string | null ) {
			if( next ) this.note_ids([ note , ... this.note_ids().filter( id => id !== note ) ])
			return this.$.$mol_state_local.value( `note=${ note }.content` , next ) || ''
		}		
		
		note_current_content( next? : string ) {
			return this.note_content( this.note()! , next )
		}		
		
		@ $mol_mem_key
		note_moment( note : string , next? : $mol_time_moment | null ) {
			const str = this.$.$mol_state_local.value( `note=${ note }.moment` , next?.toString() ) || null
			return str ? new $mol_time_moment( str ) : null
		}
		
		@ $mol_mem_key
		note_moment_view( note: string ) {
			return this.note_moment( note )?.toString( 'MM-DD hh:mm' ) ?? ''
		}
		
		note_current_moment( next? : $mol_time_moment | null ) {
			return this.note_moment( this.note()! , next )
		}		
		
		tag_ids( next? : string[] ) {
			return this.$.$mol_state_local.value( 'tag_ids' , next ) || []
		}
		
		tag( next? : string | null ) {
			return this.$.$mol_state_arg.value( 'tag' , next )
		}

		tagging( next? : boolean ) {
			return this.$.$mol_state_arg.value( 'tagging' , next === undefined ? undefined : next ? '' : null ) === ''
		}

		tag_add_showed() {
			const id = this.tag_filter()
			if( !id ) return false
			if( this.tag_ids().includes( id ) ) return false
			return true
		}

		tags_body() {
			return [
				... this.tag_add_showed() ? [ this.Tag_add() ] : [] ,
				this.Tag_list() ,
			]
		}

		tagging_add_showed() {
			const id = this.tagging_filter()
			if( !id ) return false
			if( this.tag_ids().includes( id ) ) return false
			return true
		}

		tagging_body() {
			return [
				... this.tagging_add_showed() ? [ this.Tagging_add() ] : [] ,
				this.Tagging_list() ,
				this.Note_drop() ,
			]
		}

		notes_filter_showed() {
			return this.note_ids_available().length > 1
		}

		notes_body() {
			return [
				// ... this.notes_filter_showed() ? [ this.Note_filter() ] : [] ,
				this.Notes_list() ,
				... this.tag() ? [ this.Tag_drop() ] : [] ,
			]
		}

		tag_add() {
			const id = this.tag_filter()
			this.tag_ids([ id , ... this.tag_ids() ])
			this.tag( id )
			this.tag_filter( '' )
		}

		tag_drop() {
			const tag = this.tag()
			this.tag_ids( this.tag_ids().filter( id => id !== tag ) )
			this.tag( null )
		}

		tagging_add() {
			const id = this.tagging_filter()
			this.tag_ids([ id , ... this.tag_ids() ])
			this.tagging_tag( id , true )
			this.tagging_filter( '' )
		}

		tag_title( id : string ) {
			return id
		}

		id( id : string ) {
			return id
		}

		note_title( id : string ) {
			return this.note_content( id ).replace( /\n[\s\S]*/ , ''  ) || this.note_default_title()
		}

		note_current_title() {
			return this.note_title( this.note()! )
		}

		tag_rows() {
			return this.tag_ids()
			.filter( $mol_match_text( this.tag_filter() , id => [ id ] ) )
			.map( id => this.Tag_row( id ) )
		}
		
		tagging_rows() {
			return this.tag_ids()
			.filter( $mol_match_text( this.tagging_filter() , id => [ id ] ) )
			.map( id => this.Tagging_tag_row( id ) )
		}
		
		note_ids_available() {

			const tag = this.tag()
			if( !tag ) return this.note_ids()
			
			return this.note_ids()
			.filter( note => this.note_tags( note ).includes( tag ) )

		}
		
		note_rows() {
			return this.note_ids_available()
			.filter( $mol_match_text( this.note_filter() , id => [ this.note_content( id ) ] ) )
			.map( id => this.Note_row( id ) )
		}
		
		note_add_short() {
			const id = $mol_stub_code()
			this.note_ids([ id , ... this.note_ids() ])
			this.note_tags( id , $mol_maybe( this.tag() ) )
			const title = this.note_filter()
			this.note_content( id , title ? title + '\n\n' : '' )
			this.note_filter('')
		}

		note_add_long() {
			this.note_add_short()
			this.note( this.note_ids()[0] )
			setTimeout( ()=> this.Note_content().Edit().focused( true ) , 500 )
		}

		note_drop() {
			const note = this.note()!
			this.note_ids( this.note_ids().filter( id => id !== note ) )
			this.note_tags( note , null )
			this.note_content( note , null )
			this.note( null )
			this.tagging( false )
		}

		notes_title() {
			const tag = this.tag()
			return tag ? this.tag_title( tag ) : super.notes_title()
		}

		tagging_tag( tag : string , next?: boolean ) {
			
			const note = this.note()!
			const tags = this.note_tags( note )

			if( next === undefined ) return tags.includes( tag )
			
			const filtered = tags.filter( id => id !== tag )
			
			if( next ) this.note_tags( note , [ tag , ... filtered ] )
			else this.note_tags( note , filtered )

			return next
		}
		
	}
	
}
