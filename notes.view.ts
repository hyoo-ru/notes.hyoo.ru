namespace $.$$ {
	
	export class $hyoo_notes extends $.$hyoo_notes {

		pages() {
			return [
				this.Tagging_page(),
				this.Notes_page( this.tag() ),
				... this.note() ? [ this.Note_page( this.note() ) ] : [],
			]
		}
		
		@ $mol_mem_key
		note_reminder( note: string ) {
			
			const moment = this.note_moment( note )
			if( !moment ) return null
			
			const duration = new $mol_time_interval({
				start: new $mol_time_moment,
				end: moment,
			}).duration
			
			const ms = duration.valueOf()
			if( ms < 0 ) return null
			
			this.$.$mol_state_time.now( 1000 * 60 * 60 * 24 )
			
			const days = duration.count( 'P1D' )
			if( days > 30 ) return null
			
			this.$.$mol_notify.allowed( true )
			
			return new $mol_after_timeout( ms, ()=> {
				this.$.$mol_notify.show({
					context: this.note_title( note ),
					message: moment.toString( 'YYYY-MM-DD hh:mm' ),
					uri: this.$.$mol_state_arg.make_link({ note })
				})
			} )
			
		}
		
		@ $mol_mem
		reminders() {
			this.note_ids().map( id => this.note_reminder( id ) )
			return null
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
		note_moment( note : string , next? : $mol_time_moment ) {
			const str = this.$.$mol_state_local.value( `note=${ note }.moment` , next && next.toString() ) || null
			return str ? new $mol_time_moment( str ) : null!
		}
		
		@ $mol_mem_key
		note_moment_view( note: string ) {
			return this.note_moment( note )?.toString( 'MM-DD hh:mm' ) ?? ''
		}
		
		note_current_moment( next? : $mol_time_moment ) {
			return this.note_moment( this.note()! , next )
		}		
		
		tag_ids( next? : string[] ) {
			return this.$.$mol_state_local.value( 'tag_ids' , next ) || []
		}
		
		tag( next? : string | null ) {
			return this.$.$mol_state_arg.value( 'tag' , next )
		}

		tagging_add_showed() {
			const id = this.tagging_filter()
			if( !id ) return false
			if( this.tag_ids().includes( id ) ) return false
			return true
		}

		@ $mol_mem
		tagging_tools() {
			return [
				this.Tagging_filter() ,
				... this.tagging_add_showed() ? [ this.Tagging_add() ] : [] ,
			]
		}

		notes_filter_showed() {
			return this.note_ids_available().length > 1
		}
		
		notes_page_tools() {
			return [
				this.Reminders(),
				... this.tag() ? [ this.Tag_archived() ] : [],
			]
		}

		tag_add() {
			const id = this.tagging_filter()
			this.tag_ids([ id , ... this.tag_ids() ])
			this.tag( id )
			this.tagging_filter( '' )
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

		tagging_rows() {
			return this.tag_ids()
			.filter( $mol_match_text( this.tagging_filter() , id => [ id ] ) )
			.map( id => this.Tagging_tag_row( id ) )
		}
		
		@ $mol_mem_key
		tagging_tag_row( id: string ) {
			return [
				this.Tag_link(id),
				... this.note() ? [ this.Tag_toggle(id) ] : [],
			]
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
			.sort( ( a, b )=>
				( this.note_moment( a )?.valueOf() ?? Number.POSITIVE_INFINITY )
				- ( this.note_moment( b )?.valueOf() ?? Number.POSITIVE_INFINITY )
			)
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

		note_archived( next?: boolean ) {
			
			const note = this.note()!
			if( next === undefined ) return !this.note_ids().includes( note )
			
			if( next ) this.note_ids( this.note_ids().filter( id => id !== note ) )
			else this.note_ids([ note, ... this.note_ids() ])
			
			return next
		}
		
		tag_archived( next?: boolean ) {
			
			const tag = this.tag()!
			if( next === undefined ) return !this.tag_ids().includes( tag )
			
			if( next ) this.tag_ids( this.tag_ids().filter( id => id !== tag ) )
			else this.tag_ids([ tag, ... this.tag_ids() ])
			
			return next
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
