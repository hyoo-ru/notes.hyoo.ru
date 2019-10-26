declare namespace $ { }
export = $;

declare namespace $ {
    function $mol_offline(uri?: string): void;
}

declare namespace $ {
}

declare namespace $ {
    namespace $$ {
        let $$: typeof $;
    }
    type $mol_ambient_context = (typeof globalThis) & (typeof $.$$) & (typeof $);
    function $mol_ambient(this: $mol_ambient_context, overrides: Partial<$mol_ambient_context>): $mol_ambient_context;
}

declare namespace $ {
    function $mol_class<Class extends any>(Class: Class): Class;
}

declare namespace $ {
    class $mol_object2 extends Object {
        static $: $mol_ambient_context;
        static readonly $$: $mol_ambient_context;
        $: typeof $mol_object2.$;
        readonly $$: $mol_ambient_context;
        constructor(init?: (obj: any) => void);
        static make<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: Instance) => void): Instance;
        static toString(): any;
        destructor(): void;
        toString(): any;
        toJSON(): any;
    }
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static readonly class: <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static readonly method: <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<(this: Host, ...args: Args) => Result>) => TypedPropertyDescriptor<(this: Host, ...args: Args) => Result>;
    }
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    let $mol_dev_format_head: symbol;
    let $mol_dev_format_body: symbol;
    function $mol_dev_format_native(obj: any): any;
    function $mol_dev_format_auto(obj: any): any;
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    let $mol_dev_format_div: any;
    let $mol_dev_format_span: any;
    let $mol_dev_format_ol: any;
    let $mol_dev_format_li: any;
    let $mol_dev_format_table: any;
    let $mol_dev_format_tr: any;
    let $mol_dev_format_td: any;
    let $mol_dev_format_accent: any;
    let $mol_dev_format_strong: any;
    let $mol_dev_format_string: any;
    let $mol_dev_format_shade: any;
    let $mol_dev_format_indent: any;
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
    function $mol_log(path: any, ...values: any[]): void;
}

declare namespace $ {
    function $mol_log_context(next?: () => void): () => void;
}

declare namespace $ {
    function $mol_log_debug(next?: () => void): () => void;
}

declare namespace $ {
    var $mol_log_filter: (next?: string) => string;
}

declare namespace $ {
    function $mol_log_group<Task extends Function, This>(name: string, task: Task): Task;
}

declare namespace $ {
    class $mol_log2 extends $mol_wrapper {
        readonly host: any;
        readonly id: string;
        readonly args: any[];
        static current: $mol_log2;
        static wrap<This extends {
            $: $mol_ambient_context;
        }, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => any;
        constructor(host: any, id: string, args: any[]);
        stream: $mol_log2_line[];
        flush(): void;
        info(...values: any[]): void;
        static info(...values: any[]): void;
        /**
         * Enable all logs
         *
         * 	$mol_log2.excludes = []
         *
         * Exclude all atom logs:
         *
         * 	$mol_log2.excludes = [ , /˸|🠈|⏭|⏯|►|💤|☍|☌|✓|✔|✘|🕱|�/ ]
         *
         * Disable logs:
         *
         * 	$mol_log2.excludes = null
         */
        static excludes: RegExp[];
        static prefix: any[];
    }
    class $mol_log2_indent extends $mol_wrapper {
        static wrap<This extends {
            $: $mol_ambient_context;
        }, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => any;
    }
    class $mol_log2_table extends $mol_log2 {
    }
    class $mol_log2_hidden extends $mol_log2 {
        flush(): void;
    }
    class $mol_log2_line extends Array<any> {
        constructor(...items: any[]);
    }
    class $mol_log2_token extends Array<any> {
        constructor(...items: any[]);
    }
    let $mol_log2_token_empty: $mol_log2_token;
    let $mol_log2_token_indent: $mol_log2_token;
    let $mol_log2_legend: $mol_log2_table;
}

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_after_frame extends $mol_after_timeout {
        task: () => void;
        constructor(task: () => void);
    }
}

declare namespace $ {
    function $mol_compare_any(a: any, b: any): boolean;
}

declare namespace $ {
    const $mol_conform_stack: any[];
    function $mol_conform<Target, Source>(target: Target, source: Source): Target;
    const $mol_conform_handlers: WeakMap<Object, (target: any, source: any) => any>;
    function $mol_conform_handler<Class>(cl: {
        new (...args: any[]): Class;
    }, handler: (target: Class, source: Class) => Class): void;
}

declare namespace $ {
    function $mol_array_trim<Item>(array: Item[]): Item[];
}

declare namespace $ {
    const enum $mol_fiber_status {
        persist = -3,
        actual = -2,
        doubt = -1,
        obsolete = 0
    }
    function $mol_fiber_defer<Value = void>(calculate: () => Value): $mol_fiber<any>;
    function $mol_fiber_func<This, Args extends any[], Result>(calculate: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => Result;
    function $mol_fiber_root<Calculate extends (this: This, ...args: any[]) => Result, Result = void, This = void>(calculate: Calculate): Calculate;
    function $mol_fiber_method<Host, Value>(obj: Host, name: keyof Host, descr: TypedPropertyDescriptor<(this: Host, ...args: any[]) => Value>): TypedPropertyDescriptor<(this: Host, ...args: any[]) => Value>;
    function $mol_fiber_sync<Args extends any[], Value = void, This = void>(request: (this: This, ...args: Args) => PromiseLike<Value>): (...args: Args) => Value;
    function $mol_fiber_warp(): Promise<void>;
    function $mol_fiber_fence(func: () => any): any;
    function $mol_fiber_unlimit<Result>(task: () => Result): Result;
    class $mol_fiber_solid extends $mol_wrapper {
        static func<This, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => Result;
    }
    class $mol_fiber<Value = any> extends $mol_wrapper {
        static wrap<This, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => any;
        static quant: number;
        static deadline: number;
        static liveline: number;
        static current: $mol_fiber<any>;
        static scheduled: $mol_after_frame;
        static queue: (() => PromiseLike<any>)[];
        static tick(): Promise<void>;
        static schedule(): Promise<any>;
        value: Value;
        error: Error | PromiseLike<Value>;
        cursor: $mol_fiber_status;
        masters: (number | $mol_fiber<any>)[];
        calculate: () => Value;
        schedule(): void;
        wake(): Value;
        push(value: Value): Value;
        fail(error: Error | PromiseLike<Value>): Error | PromiseLike<Value>;
        wait(promise: PromiseLike<Value>): PromiseLike<Value>;
        complete(): void;
        complete_master(master_index: number): void;
        pull(): void;
        update(): void;
        get(): Value;
        limit(): void;
        master: $mol_fiber;
        rescue(master: $mol_fiber, master_index: number): void;
        obey(master: $mol_fiber, master_index: number): number;
        lead(slave: $mol_fiber, master_index: number): number;
        dislead(slave_index: number): void;
        disobey(master_index: number): void;
        obsolete_slaves(): void;
        obsolete(master_index: number): void;
        forget(): void;
        abort(): boolean;
        destructor(): void;
    }
    let $mol_fiber_token_runned: $mol_log2_token;
    let $mol_fiber_token_changed1: $mol_log2_token;
    let $mol_fiber_token_changed2: $mol_log2_token;
    let $mol_fiber_token_actualized: $mol_log2_token;
    let $mol_fiber_token_sleeped: $mol_log2_token;
    let $mol_fiber_token_failed: $mol_log2_token;
    let $mol_fiber_token_destructed: $mol_log2_token;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    function $mol_atom2_value<Value>(task: () => Value): Value;
    class $mol_atom2<Value = any> extends $mol_fiber<Value> {
        static readonly current: $mol_atom2<any>;
        static cached: boolean;
        static reap_task: $mol_fiber<any>;
        static reap_queue: $mol_atom2<any>[];
        static reap(atom: $mol_atom2): void;
        slaves: (number | $mol_fiber<any>)[];
        rescue(master: $mol_atom2, cursor: number): void;
        get(): Value;
        pull(): void | Value;
        _value: Value;
        value: Value;
        _error: Error | PromiseLike<Value>;
        error: null | Error | PromiseLike<Value>;
        put(next: Value): Value;
        complete_master(master_index: number): void;
        obey(master: $mol_fiber, master_index: number): number;
        lead(slave: $mol_fiber, master_index: number): number;
        dislead(slave_index: number): void;
        obsolete(master_index?: number): void;
        doubt(master_index?: number): void;
        obsolete_slaves(): void;
        doubt_slaves(): void;
        readonly fresh: (this: void) => void;
        readonly alone: boolean;
        readonly derived: boolean;
        destructor(): void;
    }
    let $mol_atom2_token_revalidation: $mol_log2_token;
    let $mol_atom2_token_stumbled: $mol_log2_token;
    let $mol_atom2_token_revalidated: $mol_log2_token;
    let $mol_atom2_token_leaded: $mol_log2_token;
    let $mol_atom2_token_disleaded: $mol_log2_token;
    let $mol_atom2_token_obsoleted: $mol_log2_token;
    let $mol_atom2_token_doubted: $mol_log2_token;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_atom2_field<Host extends object, Field extends keyof Host, Value extends Host[Field]>(proto: Host, name: Field, descr?: TypedPropertyDescriptor<Value>): any;
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends Object {
        static $: $mol_ambient_context;
        static readonly $$: $mol_ambient_context;
        _$: $mol_ambient_context;
        $: $mol_ambient_context;
        readonly $$: $mol_ambient_context;
        static make<Instance>(this: {
            new (): Instance;
        }, config: Partial<Instance>): Instance;
        static toString(): string;
        toString(): string;
        toJSON(): string;
        destructor(): void;
        [Symbol.toStringTag]: string;
    }
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(next?: {
            width: number;
            height: number;
        }): {
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
    class $mol_mem_force extends Object {
        constructor();
        $mol_mem_force: boolean;
        static $mol_mem_force: boolean;
        static toString(): string;
    }
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    class $mol_mem_force_update extends $mol_mem_force {
    }
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
}

declare namespace $ {
    function $mol_mem<Host extends object, Field extends keyof Host, Value>(proto: Host, name: Field, descr?: TypedPropertyDescriptor<(next?: Value, force?: $mol_mem_force) => Value>): any;
}

declare namespace $ {
    function $mol_dict_key(value: any): any;
    class $mol_dict<Key, Value> extends Map<Key, Value> {
        get(key: Key): Value;
        has(key: Key): boolean;
        set(key: Key, value: Value): this;
        delete(key: Key): boolean;
        forEach(back: (value: Value, key: Key, dict: Map<Key, Value>) => void, context?: any): void;
        [Symbol.iterator](): {
            [Symbol.iterator](): any;
            next(): IteratorResult<[Key, Value], any>;
        };
    }
}

declare namespace $ {
    function $mol_mem_key<Host extends object, Field extends keyof Host, Key, Value>(proto: Host, name: Field, descr?: TypedPropertyDescriptor<(key: Key, next?: Value, force?: $mol_mem_force) => Value>): any;
}

declare namespace $ {
    function $mol_atom2_autorun(calculate: () => any): $mol_atom2<unknown>;
}

/// <reference types="node" />
declare namespace $ {
    function $mol_exec(dir: string, command: string, ...args: string[]): import("child_process").SpawnSyncReturns<Buffer>;
}

interface $node {
    [key: string]: any;
}
declare var $node: $node;

declare namespace $ {
}

declare namespace $ {
    var $mol_dom_context: Window & Pick<typeof globalThis, 'Node' | 'Element' | 'HTMLElement' | 'XMLHttpRequest' | 'DOMParser' | 'XMLSerializer'>;
}

declare namespace $ {
    class $mol_defer extends $mol_object {
        run: () => void;
        constructor(run: () => void);
        destructor(): void;
        static all: $mol_defer[];
        static timer: any;
        static scheduleNative: (handler: () => void) => any;
        static schedule(): void;
        static unschedule(): void;
        static add(defer: $mol_defer): void;
        static drop(defer: $mol_defer): void;
        static run(): void;
    }
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[]): Element[];
        static focus(event: FocusEvent): void;
        static blur(event: FocusEvent): void;
    }
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_fail_catch(error: object): boolean;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    function $mol_func_name(func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    function $mol_deprecated<Host extends {
        constructor: Function;
    }, Method extends Function>(message: string): (host: Host, field: string, descr: TypedPropertyDescriptor<Method>) => void;
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root(id: number): $mol_view;
        autorun(): $mol_atom2<unknown>;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
        sub_visible(): readonly (string | number | boolean | Node | $mol_view)[];
        minimal_width(): number;
        minimal_height(): number;
        content_height(): number;
        dom_id(): string;
        dom_node(next?: Element): Element;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        view_names_owned(): string[];
        view_names(): string[];
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {
            [key: string]: string | number | boolean | null;
        };
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        event_async(): {
            [key: string]: (event: Event) => void;
        };
        plugins(): readonly $mol_view[];
    }
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node(next?: Element): Element;
        attr_static(): {
            [key: string]: string | number | boolean;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        render(): void;
    }
}

declare namespace $ {
    class $mol_meter extends $mol_plugin {
        /**
         *  ```
         *  zoom 1
         *  ```
         **/
        zoom(): number;
        /**
         *  ```
         *  width?val 0
         *  ```
         **/
        width(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  height?val 0
         *  ```
         **/
        height(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  left?val 0
         *  ```
         **/
        left(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  right?val 0
         *  ```
         **/
        right(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  bottom?val 0
         *  ```
         **/
        bottom(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  top?val 0
         *  ```
         **/
        top(val?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_meter extends $.$mol_meter {
        rect(): {
            left: number;
            top: number;
            right: number;
            bottom: number;
            width: number;
            height: number;
            zoom: number;
        };
        top(): number;
        bottom(): number;
        left(): number;
        right(): number;
        width(): number;
        height(): number;
        zoom(): number;
    }
}

declare namespace $ {
    class $mol_touch extends $mol_plugin {
        /**
         *  ```
         *  start_zoom?val 0
         *  ```
         **/
        start_zoom(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  start_distance?val 0
         *  ```
         **/
        start_distance(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  zoom?val 1
         *  ```
         **/
        zoom(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  start_pan?val /
         *  	0
         *  	0
         *  ```
         **/
        start_pan(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  pan?val /
         *  	0
         *  	0
         *  ```
         **/
        pan(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  pos?val /
         *  	NaN
         *  	NaN
         *  ```
         **/
        pos(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  start_pos?val null
         *  ```
         **/
        start_pos(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_precision 16
         *  ```
         **/
        swipe_precision(): number;
        /**
         *  ```
         *  swipe_right?val null
         *  ```
         **/
        swipe_right(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_bottom?val null
         *  ```
         **/
        swipe_bottom(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_left?val null
         *  ```
         **/
        swipe_left(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_top?val null
         *  ```
         **/
        swipe_top(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_from_right?val null
         *  ```
         **/
        swipe_from_right(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_from_bottom?val null
         *  ```
         **/
        swipe_from_bottom(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_from_left?val null
         *  ```
         **/
        swipe_from_left(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_from_top?val null
         *  ```
         **/
        swipe_from_top(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_to_right?val null
         *  ```
         **/
        swipe_to_right(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_to_bottom?val null
         *  ```
         **/
        swipe_to_bottom(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_to_left?val null
         *  ```
         **/
        swipe_to_left(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  swipe_to_top?val null
         *  ```
         **/
        swipe_to_top(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  style *
         *  	^
         *  	touch-action \none
         *  ```
         **/
        style(): {
            "touch-action": string;
        };
        /**
         *  ```
         *  event *
         *  	^
         *  	touchstart?event <=> event_start?event
         *  	touchmove?event <=> event_move?event
         *  	touchend?event <=> event_end?event
         *  	mousedown?event <=> event_start?event
         *  	mousemove?event <=> event_move?event
         *  	mouseup?event <=> event_end?event
         *  	mouseleave?event <=> event_leave?event
         *  	wheel?event <=> event_wheel?event
         *  ```
         **/
        event(): {
            "touchstart": (event?: any) => any;
            "touchmove": (event?: any) => any;
            "touchend": (event?: any) => any;
            "mousedown": (event?: any) => any;
            "mousemove": (event?: any) => any;
            "mouseup": (event?: any) => any;
            "mouseleave": (event?: any) => any;
            "wheel": (event?: any) => any;
        };
        /**
         *  ```
         *  event_start?event null
         *  ```
         **/
        event_start(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_move?event null
         *  ```
         **/
        event_move(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_end?event null
         *  ```
         **/
        event_end(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_leave?event null
         *  ```
         **/
        event_leave(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_wheel?event null
         *  ```
         **/
        event_wheel(event?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_touch extends $.$mol_touch {
        rect(): ClientRect | DOMRect;
        event_start(event: TouchEvent | MouseEvent): void;
        event_leave(event: TouchEvent | MouseEvent): void;
        event_move(event: TouchEvent | MouseEvent): void;
        swipe_left(event?: TouchEvent | MouseEvent): void;
        swipe_right(event?: TouchEvent | MouseEvent): void;
        swipe_top(event?: TouchEvent | MouseEvent): void;
        swipe_bottom(event?: TouchEvent | MouseEvent): void;
        event_end(event?: TouchEvent | MouseEvent): void;
        event_wheel(event: WheelEvent): void;
    }
}

declare namespace $ {
    function $mol_dom_render_events(el: Element, events: {
        [key: string]: (event: Event) => any;
    }): void;
    function $mol_dom_render_events_async(el: Element, events: {
        [key: string]: (event: Event) => any;
    }): void;
}

declare namespace $ {
    class $mol_ghost extends $mol_view {
        /**
         *  ```
         *  Sub $mol_view
         *  ```
         **/
        Sub(): $mol_view;
    }
}

declare namespace $.$$ {
    class $mol_ghost extends $.$mol_ghost {
        dom_node(): Element;
        dom_tree(): Element;
        title(): string;
    }
}

declare namespace $ {
    class $mol_book extends $mol_view {
        /**
         *  ```
         *  sub <= pages_wrapped
         *  ```
         **/
        sub(): readonly $mol_view[];
        /**
         *  ```
         *  pages_wrapped /$mol_view
         *  ```
         **/
        pages_wrapped(): readonly $mol_view[];
        /**
         *  ```
         *  pages /$mol_view
         *  ```
         **/
        pages(): readonly $mol_view[];
        /**
         *  ```
         *  plugins /$mol_plugin
         *  	<= Meter
         *  	<= Touch
         *  ```
         **/
        plugins(): readonly $mol_plugin[];
        width(): number;
        /**
         *  ```
         *  Meter $mol_meter width => width
         *  ```
         **/
        Meter(): $$.$mol_meter;
        /**
         *  ```
         *  Touch $mol_touch
         *  	swipe_from_left?val <=> event_front_up?val
         *  	swipe_to_left?val <=> event_front_down?val
         *  ```
         **/
        Touch(): $$.$mol_touch;
        /**
         *  ```
         *  event_front_up?val null
         *  ```
         **/
        event_front_up(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_front_down?val null
         *  ```
         **/
        event_front_down(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Page!index $mol_book_page
         *  	Sub <= page!index
         *  	visible <= page_visible!index
         *  ```
         **/
        Page(index: any): $mol_book_page;
        /**
         *  ```
         *  page!index null
         *  ```
         **/
        page(index: any): any;
        /**
         *  ```
         *  page_visible!index true
         *  ```
         **/
        page_visible(index: any): boolean;
        /**
         *  ```
         *  Placeholder $mol_book_placeholder title <= title
         *  ```
         **/
        Placeholder(): $mol_book_placeholder;
    }
}
declare namespace $ {
    class $mol_book_placeholder extends $mol_view {
        /**
         *  ```
         *  minimal_width 400
         *  ```
         **/
        minimal_width(): number;
        /**
         *  ```
         *  attr *
         *  	^
         *  	tabindex null
         *  ```
         **/
        attr(): {
            "tabindex": any;
        };
    }
}
declare namespace $ {
    class $mol_book_page extends $mol_ghost {
        /**
         *  ```
         *  attr_static *
         *  	^
         *  	tabindex 0
         *  	mol_book_page_visible true
         *  ```
         **/
        attr_static(): {
            "tabindex": number;
            "mol_book_page_visible": boolean;
        };
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_book_page_focused <= focused
         *  	mol_book_page_visible <= visible
         *  ```
         **/
        attr(): {
            "mol_book_page_focused": boolean;
            "mol_book_page_visible": boolean;
        };
        /**
         *  ```
         *  visible true
         *  ```
         **/
        visible(): boolean;
    }
}

declare namespace $.$$ {
    class $mol_book extends $.$mol_book {
        pages_extended(): $mol_view[];
        break_point(): number;
        page(index: number): $mol_view;
        page_visible(index: number): boolean;
        pages_wrapped(): $mol_view[];
        title(): string;
        event_front_up(event?: Event): void;
        event_front_down(event?: Event): void;
        minimal_width(): number;
    }
}

declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        slashBackLeft = 226,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $ {
    class $mol_button extends $mol_view {
        /**
         *  ```
         *  enabled true
         *  ```
         **/
        enabled(): boolean;
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  click?event null
         *  ```
         **/
        click(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_click?event null
         *  ```
         **/
        event_click(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event *
         *  	^
         *  	click?event <=> event_activate?event
         *  	keypress?event <=> event_key_press?event
         *  ```
         **/
        event(): {
            "click": (event?: any) => any;
            "keypress": (event?: any) => any;
        };
        /**
         *  ```
         *  event_activate?event null
         *  ```
         **/
        event_activate(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_key_press?event null
         *  ```
         **/
        event_key_press(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  attr *
         *  	^
         *  	disabled <= disabled
         *  	role \button
         *  	tabindex <= tab_index
         *  	title <= hint
         *  ```
         **/
        attr(): {
            "disabled": boolean;
            "role": string;
            "tabindex": number;
            "title": string;
        };
        /**
         *  ```
         *  disabled false
         *  ```
         **/
        disabled(): boolean;
        /**
         *  ```
         *  tab_index 0
         *  ```
         **/
        tab_index(): number;
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  sub /$mol_view_content <= title
         *  ```
         **/
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
    }
}

declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
    }
}

declare namespace $ {
    class $mol_button_typed extends $mol_button {
    }
}
declare namespace $ {
    class $mol_button_major extends $mol_button_typed {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_theme \$mol_theme_accent
         *  ```
         **/
        attr(): {
            "mol_theme": string;
            "disabled": boolean;
            "role": string;
            "tabindex": number;
            "title": string;
        };
    }
}
declare namespace $ {
    class $mol_button_minor extends $mol_button_typed {
    }
}

declare namespace $ {
    class $mol_scroll extends $mol_view {
        /**
         *  ```
         *  minimal_height 0
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  field *
         *  	^
         *  	scrollTop <= scroll_top?val
         *  	scrollLeft <= scroll_left?val
         *  	scrollBottom <= scroll_bottom?val
         *  	scrollRight <= scroll_right?val
         *  ```
         **/
        field(): {
            "scrollTop": any;
            "scrollLeft": any;
            "scrollBottom": any;
            "scrollRight": any;
        };
        /**
         *  ```
         *  scroll_top?val 0
         *  ```
         **/
        scroll_top(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  scroll_left?val 0
         *  ```
         **/
        scroll_left(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  scroll_bottom?val 0
         *  ```
         **/
        scroll_bottom(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  scroll_right?val 0
         *  ```
         **/
        scroll_right(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event *
         *  	^
         *  	scroll?event <=> event_scroll?event
         *  ```
         **/
        event(): {
            "scroll": (event?: any) => any;
        };
        /**
         *  ```
         *  event_scroll?event null
         *  ```
         **/
        event_scroll(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Strut $mol_view style * transform <= strut_transform
         *  ```
         **/
        Strut(): $mol_view;
        /**
         *  ```
         *  strut_transform \
         *  ```
         **/
        strut_transform(): string;
    }
}

declare namespace $.$$ {
    function $mol_scroll_top(): number;
    function $mol_scroll_left(): number;
    function $mol_scroll_moving(): boolean;
    class $mol_scroll extends $.$mol_scroll {
        scroll_bottom(next?: number): number;
        scroll_right(next?: number): number;
        event_scroll(next?: Event): void;
        readonly $$: $mol_ambient_context;
        strut_transform(): string;
        sub_visible(): readonly (string | number | boolean | Node | $mol_view)[];
    }
}

declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $ {
    class $mol_page extends $mol_view {
        /**
         *  ```
         *  sub /
         *  	<= Head
         *  	<= Body
         *  	<= Foot
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Head $mol_view
         *  	attr * mol_theme \$mol_theme_base
         *  	sub <= head
         *  ```
         **/
        Head(): $mol_view;
        /**
         *  ```
         *  head /
         *  	<= Title
         *  	<= Tools
         *  ```
         **/
        head(): readonly any[];
        /**
         *  ```
         *  Title $mol_button
         *  	sub / <= title
         *  	event_click?val <=> event_top?val
         *  ```
         **/
        Title(): $$.$mol_button;
        /**
         *  ```
         *  event_top?val null
         *  ```
         **/
        event_top(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Tools $mol_view sub <= tools
         *  ```
         **/
        Tools(): $mol_view;
        /**
         *  ```
         *  tools /$mol_view_content
         *  ```
         **/
        tools(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Body $mol_scroll
         *  	scroll_top?val <=> body_scroll_top?val
         *  	sub <= body
         *  ```
         **/
        Body(): $$.$mol_scroll;
        /**
         *  ```
         *  body_scroll_top?val 0
         *  ```
         **/
        body_scroll_top(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  body /$mol_view_content
         *  ```
         **/
        body(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Foot $mol_view
         *  	attr * mol_theme \$mol_theme_base
         *  	sub <= foot
         *  ```
         **/
        Foot(): $mol_view;
        /**
         *  ```
         *  foot /$mol_view
         *  ```
         **/
        foot(): readonly $mol_view[];
    }
}

declare namespace $.$$ {
    class $mol_page extends $.$mol_page {
        body_scroll_top(next?: number): number;
    }
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value, force?: $mol_mem_force): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

/// <reference types="node" />
declare namespace $ {
    class $mol_file extends $mol_object {
        static absolute(path: string): $mol_file;
        static relative(path: string): $mol_file;
        path(): string;
        watcher(): import("chokidar").FSWatcher;
        stat(next?: any, force?: $mol_mem_force): any;
        version(): any;
        exists(next?: boolean): boolean;
        parent(): $mol_file;
        type(): "dir" | "link" | "file" | "blocks" | "chars" | "fifo" | "socket";
        name(): string;
        ext(): string;
        content(next?: string | Buffer, force?: $mol_mem_force): string | Buffer;
        reader(): import("fs").ReadStream;
        writer(): import("fs").WriteStream;
        sub(): $mol_file[];
        resolve(path: string): $mol_file;
        relate(base?: $mol_file): string;
        append(next: string): void;
        find(include?: RegExp, exclude?: RegExp): $mol_file[];
    }
}

declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
    }
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static href(next?: string): string;
        static dict(next?: {
            [key: string]: string | null;
        }): {
            [key: string]: string;
        };
        static value(key: string, next?: string | null): string;
        static link(next: any): string;
        static make_link(next: {
            [key: string]: any;
        }): string;
        constructor(prefix?: string);
        value(key: string, next?: string): string;
        sub(postfix: string): $mol_state_arg;
        link(next: {
            [key: string]: string;
        }): string;
    }
}

declare namespace $ {
    class $mol_link extends $mol_view {
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  dom_name \a
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	href <= uri
         *  	title <= hint
         *  	target <= target
         *  	download <= file_name
         *  	mol_link_current <= current
         *  ```
         **/
        attr(): {
            "href": string;
            "title": string;
            "target": string;
            "download": string;
            "mol_link_current": boolean;
        };
        /**
         *  ```
         *  uri \
         *  ```
         **/
        uri(): string;
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  target \_self
         *  ```
         **/
        target(): string;
        /**
         *  ```
         *  file_name \
         *  ```
         **/
        file_name(): string;
        /**
         *  ```
         *  current false
         *  ```
         **/
        current(): boolean;
        /**
         *  ```
         *  sub /$mol_view_content <= title
         *  ```
         **/
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  arg *
         *  ```
         **/
        arg(): {};
        /**
         *  ```
         *  event *
         *  	^
         *  	click?event <=> click?event
         *  ```
         **/
        event(): {
            "click": (event?: any) => any;
        };
        /**
         *  ```
         *  click?event <=> event_click?event
         *  ```
         **/
        click(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_click?event null
         *  ```
         **/
        event_click(event?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri(): string;
        current(): boolean;
        event_click(event?: Event): void;
        file_name(): string;
    }
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static now(precision?: number, next?: number): number;
    }
}

declare namespace $ {
    function $mol_font_canvas(next?: CanvasRenderingContext2D): CanvasRenderingContext2D;
}

declare namespace $ {
    function $mol_font_measure(size: number, face: string, text: string): number;
}

declare namespace $ {
    class $mol_svg extends $mol_view {
        /**
         *  ```
         *  dom_name \svg
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  dom_name_space \http://www.w3.org/2000/svg
         *  ```
         **/
        dom_name_space(): string;
        /**
         *  ```
         *  text_width?text 0
         *  ```
         **/
        text_width(text?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  font_size 16
         *  ```
         **/
        font_size(): number;
        /**
         *  ```
         *  font_family \
         *  ```
         **/
        font_family(): string;
    }
}

declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): CSSStyleDeclaration;
        font_size(): number;
        font_family(): any;
        text_width(text: string): number;
    }
}

declare namespace $ {
    class $mol_svg_root extends $mol_svg {
        /**
         *  ```
         *  dom_name \svg
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	viewBox <= view_box
         *  	preserveAspectRatio <= aspect
         *  ```
         **/
        attr(): {
            "viewBox": string;
            "preserveAspectRatio": string;
        };
        /**
         *  ```
         *  view_box \0 0 100 100
         *  ```
         **/
        view_box(): string;
        /**
         *  ```
         *  aspect \xMidYMid
         *  ```
         **/
        aspect(): string;
    }
}

declare namespace $ {
    class $mol_svg_path extends $mol_svg {
        /**
         *  ```
         *  dom_name \path
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	d <= geometry
         *  ```
         **/
        attr(): {
            "d": string;
        };
        /**
         *  ```
         *  geometry \
         *  ```
         **/
        geometry(): string;
    }
}

declare namespace $ {
    class $mol_icon extends $mol_svg_root {
        /**
         *  ```
         *  view_box \0 0 24 24
         *  ```
         **/
        view_box(): string;
        /**
         *  ```
         *  minimal_width 16
         *  ```
         **/
        minimal_width(): number;
        /**
         *  ```
         *  minimal_height 16
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  sub / <= Path
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Path $mol_svg_path geometry <= path
         *  ```
         **/
        Path(): $mol_svg_path;
        /**
         *  ```
         *  path \
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_filter extends $mol_icon {
        /**
         *  ```
         *  path \M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_filter_remove extends $mol_icon {
        /**
         *  ```
         *  path \M14.76,20.83L17.6,18L14.76,15.17L16.17,13.76L19,16.57L21.83,13.76L23.24,15.17L20.43,18L23.24,20.83L21.83,22.24L19,19.4L16.17,22.24L14.76,20.83M12,12V19.88C12.04,20.18 11.94,20.5 11.71,20.71C11.32,21.1 10.69,21.1 10.3,20.71L8.29,18.7C8.06,18.47 7.96,18.16 8,17.87V12H7.97L2.21,4.62C1.87,4.19 1.95,3.56 2.38,3.22C2.57,3.08 2.78,3 3,3V3H17V3C17.22,3 17.43,3.08 17.62,3.22C18.05,3.56 18.13,4.19 17.79,4.62L12.03,12H12Z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_bar extends $mol_view {
    }
}

declare namespace $ {
    class $mol_pop extends $mol_view {
        /**
         *  ```
         *  event * keydown?event <=> keydown?event
         *  ```
         **/
        event(): {
            "keydown": (event?: any) => any;
        };
        /**
         *  ```
         *  keydown?event null
         *  ```
         **/
        keydown(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  showed?val false
         *  ```
         **/
        showed(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  plugins /$mol_plugin <= Meter
         *  ```
         **/
        plugins(): readonly $mol_plugin[];
        top(): number;
        bottom(): number;
        left(): number;
        right(): number;
        /**
         *  ```
         *  Meter $mol_meter
         *  	top => top
         *  	bottom => bottom
         *  	left => left
         *  	right => right
         *  ```
         **/
        Meter(): $$.$mol_meter;
        /**
         *  ```
         *  sub /
         *  	<= Anchor
         *  	<= Bubble
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Anchor null
         *  ```
         **/
        Anchor(): any;
        /**
         *  ```
         *  Bubble $mol_pop_bubble
         *  	align <= align
         *  	content <= bubble_content
         *  	height_max <= height_max
         *  ```
         **/
        Bubble(): $mol_pop_bubble;
        /**
         *  ```
         *  align \bottom_center
         *  ```
         **/
        align(): string;
        /**
         *  ```
         *  bubble_content /$mol_view_content
         *  ```
         **/
        bubble_content(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  height_max 9999
         *  ```
         **/
        height_max(): number;
    }
}
declare namespace $ {
    class $mol_pop_bubble extends $mol_scroll {
        /**
         *  ```
         *  sub <= content
         *  ```
         **/
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  content /$mol_view_content
         *  ```
         **/
        content(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  style *
         *  	^
         *  	maxHeight <= height_max
         *  ```
         **/
        style(): {
            "maxHeight": number;
        };
        /**
         *  ```
         *  height_max 9999
         *  ```
         **/
        height_max(): number;
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_pop_align <= align
         *  	tabindex 0
         *  ```
         **/
        attr(): {
            "mol_pop_align": string;
            "tabindex": number;
        };
        /**
         *  ```
         *  align \
         *  ```
         **/
        align(): string;
    }
}

declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        sub(): any[];
        height_max(): number;
        align(): string;
        keydown(event: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_dimmer extends $mol_view {
        /**
         *  ```
         *  haystack \
         *  ```
         **/
        haystack(): string;
        /**
         *  ```
         *  needle \
         *  ```
         **/
        needle(): string;
        /**
         *  ```
         *  sub <= parts
         *  ```
         **/
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  parts /$mol_view_content
         *  ```
         **/
        parts(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Low!id $mol_view sub / <= string!id
         *  ```
         **/
        Low(id: any): $mol_view;
        /**
         *  ```
         *  string!id \
         *  ```
         **/
        string(id: any): string;
    }
}

declare namespace $.$$ {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
    }
}

declare namespace $ {
    class $mol_nav extends $mol_plugin {
        /**
         *  ```
         *  cycle?val false
         *  ```
         **/
        cycle(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  mod_ctrl false
         *  ```
         **/
        mod_ctrl(): boolean;
        /**
         *  ```
         *  mod_shift false
         *  ```
         **/
        mod_shift(): boolean;
        /**
         *  ```
         *  mod_alt false
         *  ```
         **/
        mod_alt(): boolean;
        /**
         *  ```
         *  keys_x?val /
         *  ```
         **/
        keys_x(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  keys_y?val /
         *  ```
         **/
        keys_y(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  current_x?val \
         *  ```
         **/
        current_x(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  current_y?val \
         *  ```
         **/
        current_y(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_up?event null
         *  ```
         **/
        event_up(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_down?event null
         *  ```
         **/
        event_down(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_left?event null
         *  ```
         **/
        event_left(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_right?event null
         *  ```
         **/
        event_right(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event *
         *  	^
         *  	keydown?event <=> event_key?event
         *  ```
         **/
        event(): {
            "keydown": (event?: any) => any;
        };
        /**
         *  ```
         *  event_key?event null
         *  ```
         **/
        event_key(event?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): void;
        event_up(event?: KeyboardEvent): void;
        event_down(event?: KeyboardEvent): void;
        event_left(event: KeyboardEvent): void;
        event_right(event: KeyboardEvent): void;
        index_y(): any;
        index_x(): any;
    }
}

declare namespace $ {
    class $mol_list extends $mol_view {
        /**
         *  ```
         *  sub <= rows
         *  ```
         **/
        sub(): readonly $mol_view[];
        /**
         *  ```
         *  rows /$mol_view
         *  ```
         **/
        rows(): readonly $mol_view[];
        /**
         *  ```
         *  Empty null
         *  ```
         **/
        Empty(): any;
    }
}

declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): any[] | readonly $mol_view[];
        row_offsets(): number[];
        row_context(index: number): $mol_ambient_context;
        sub_visible(): any[] | readonly $mol_view[];
        minimal_height(): number;
    }
}

declare namespace $ {
    class $mol_string extends $mol_view {
        /**
         *  ```
         *  dom_name \input
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  enabled true
         *  ```
         **/
        enabled(): boolean;
        /**
         *  ```
         *  debounce 0
         *  ```
         **/
        debounce(): number;
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  autocomplete false
         *  ```
         **/
        autocomplete(): boolean;
        /**
         *  ```
         *  field *
         *  	^
         *  	disabled <= disabled
         *  	value <= value_changed?val
         *  	placeholder <= hint
         *  	type <= type?val
         *  	spellcheck <= spellcheck
         *  	autocomplete <= autocomplete_native
         *  ```
         **/
        field(): {
            "disabled": boolean;
            "value": any;
            "placeholder": string;
            "type": any;
            "spellcheck": boolean;
            "autocomplete": string;
        };
        /**
         *  ```
         *  disabled false
         *  ```
         **/
        disabled(): boolean;
        /**
         *  ```
         *  value_changed?val <=> value?val
         *  ```
         **/
        value_changed(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  value?val \
         *  ```
         **/
        value(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  type?val \text
         *  ```
         **/
        type(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  spellcheck false
         *  ```
         **/
        spellcheck(): boolean;
        /**
         *  ```
         *  autocomplete_native \
         *  ```
         **/
        autocomplete_native(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	maxlength <= length_max
         *  ```
         **/
        attr(): {
            "maxlength": number;
        };
        /**
         *  ```
         *  length_max Infinity
         *  ```
         **/
        length_max(): number;
        /**
         *  ```
         *  event *
         *  	^
         *  	input?event <=> event_change?event
         *  	keydown?event <=> event_key_press?event
         *  ```
         **/
        event(): {
            "input": (event?: any) => any;
            "keydown": (event?: any) => any;
        };
        /**
         *  ```
         *  event_change?event null
         *  ```
         **/
        event_change(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  event_key_press?event null
         *  ```
         **/
        event_key_press(event?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        event_change(next?: Event): void;
        event_key_press(next?: KeyboardEvent): void;
        disabled(): boolean;
        autocomplete_native(): "on" | "off";
    }
}

declare namespace $ {
    class $mol_icon_chevron extends $mol_icon {
        /**
         *  ```
         *  path \M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => string[]): (variant: Variant) => boolean;
}

declare namespace $ {
    class $mol_select extends $mol_pop {
        /**
         *  ```
         *  dictionary *
         *  ```
         **/
        dictionary(): {};
        /**
         *  ```
         *  options /string
         *  ```
         **/
        options(): readonly string[];
        /**
         *  ```
         *  value?val \
         *  ```
         **/
        value(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  Option_row!id $mol_button_minor
         *  	event_click?event <=> event_select!id?event
         *  	sub <= option_content!id
         *  ```
         **/
        Option_row(id: any): $mol_button_minor;
        /**
         *  ```
         *  event_select!id?event null
         *  ```
         **/
        event_select(id: any, event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  option_content!id / <= Option_label!id
         *  ```
         **/
        option_content(id: any): readonly any[];
        /**
         *  ```
         *  Option_label!id $mol_dimmer
         *  	minimal_height 40
         *  	haystack <= option_label!id
         *  	needle <= filter_pattern?val
         *  ```
         **/
        Option_label(id: any): $$.$mol_dimmer;
        /**
         *  ```
         *  option_label!id \
         *  ```
         **/
        option_label(id: any): string;
        /**
         *  ```
         *  filter_pattern?val \
         *  ```
         **/
        filter_pattern(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  No_options $mol_view sub / <= no_options_message
         *  ```
         **/
        No_options(): $mol_view;
        /**
         *  ```
         *  no_options_message @ \No options
         *  ```
         **/
        no_options_message(): string;
        /**
         *  ```
         *  plugins /
         *  	^
         *  	<= Nav
         *  ```
         **/
        plugins(): readonly any[];
        /**
         *  ```
         *  Nav $mol_nav
         *  	keys_y <= nav_components
         *  	current_y?component <=> option_focused?component
         *  	cycle?val <=> nav_cycle?val
         *  ```
         **/
        Nav(): $$.$mol_nav;
        /**
         *  ```
         *  nav_components /$mol_view
         *  ```
         **/
        nav_components(): readonly $mol_view[];
        /**
         *  ```
         *  option_focused?component null
         *  ```
         **/
        option_focused(component?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  nav_cycle?val true
         *  ```
         **/
        nav_cycle(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  showed?val <=> options_showed?val
         *  ```
         **/
        showed(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  options_showed?val false
         *  ```
         **/
        options_showed(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Anchor <= Trigger
         *  ```
         **/
        Anchor(): $mol_button_minor;
        /**
         *  ```
         *  Trigger $mol_button_minor
         *  	click?event <=> open?event
         *  	sub <= trigger_content
         *  ```
         **/
        Trigger(): $mol_button_minor;
        /**
         *  ```
         *  open?event null
         *  ```
         **/
        open(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  trigger_content /$mol_view_content
         *  ```
         **/
        trigger_content(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  bubble_content / <= Menu
         *  ```
         **/
        bubble_content(): readonly any[];
        /**
         *  ```
         *  Menu $mol_list rows <= menu_content
         *  ```
         **/
        Menu(): $$.$mol_list;
        /**
         *  ```
         *  menu_content /$mol_view
         *  ```
         **/
        menu_content(): readonly $mol_view[];
        /**
         *  ```
         *  option_content_current /$mol_view_content
         *  ```
         **/
        option_content_current(): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Filter $mol_string
         *  	value?val <=> filter_pattern?val
         *  	hint <= filter_hint
         *  	debounce <= debounce
         *  ```
         **/
        Filter(): $$.$mol_string;
        /**
         *  ```
         *  filter_hint <= hint
         *  ```
         **/
        filter_hint(): string;
        /**
         *  ```
         *  hint @ \Search..
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  debounce 200
         *  ```
         **/
        debounce(): number;
        /**
         *  ```
         *  Trigger_icon $mol_icon_chevron
         *  ```
         **/
        Trigger_icon(): $mol_icon_chevron;
    }
}

declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        open(): void;
        options_showed(next?: boolean): boolean;
        options(): readonly string[];
        options_filtered(): readonly string[];
        option_label(id: string): any;
        option_rows(): $mol_view[];
        option_focused(component?: $mol_view): $mol_view;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): $mol_view[];
        option_content_current(): readonly any[];
        trigger_content(): any[];
        menu_content(): $mol_view[];
    }
}

declare namespace $ {
    class $mol_icon_cross extends $mol_icon {
        /**
         *  ```
         *  path \M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_search extends $mol_bar {
        /**
         *  ```
         *  query?val \
         *  ```
         **/
        query(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sub /
         *  	<= Suggest
         *  	<= Clear
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Suggest $mol_select
         *  	value?val <=> suggest_selected?val
         *  	filter_pattern?val <=> suggest_selected?val
         *  	hint <= hint
         *  	filter_pattern?val <=> query?val
         *  	options_showed <= suggests_showed
         *  	options <= suggests
         *  	Trigger_icon null
         *  	debounce <= debounce
         *  ```
         **/
        Suggest(): $$.$mol_select;
        /**
         *  ```
         *  suggest_selected?val \
         *  ```
         **/
        suggest_selected(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  hint @ \Search...
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  suggests_showed false
         *  ```
         **/
        suggests_showed(): boolean;
        /**
         *  ```
         *  suggests /string
         *  ```
         **/
        suggests(): readonly string[];
        /**
         *  ```
         *  debounce 200
         *  ```
         **/
        debounce(): number;
        /**
         *  ```
         *  Clear $mol_button_minor
         *  	sub / <= Clear_icon
         *  	event_click?val <=> event_clear?val
         *  ```
         **/
        Clear(): $mol_button_minor;
        /**
         *  ```
         *  Clear_icon $mol_icon_cross
         *  ```
         **/
        Clear_icon(): $mol_icon_cross;
        /**
         *  ```
         *  event_clear?val null
         *  ```
         **/
        event_clear(val?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        suggests_showed(): boolean;
        suggest_selected(next?: string): void;
        sub(): ($mol_button_minor | $mol_select)[];
        event_clear(event?: Event): void;
    }
}

declare namespace $ {
    class $mol_icon_plus extends $mol_icon {
        /**
         *  ```
         *  path \M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_up extends $mol_icon {
        /**
         *  ```
         *  path \M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_arrow_up_bold extends $mol_icon {
        /**
         *  ```
         *  path \M15,20H9V12H4.16L12,4.16L19.84,12H15V20Z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_settings extends $mol_icon {
        /**
         *  ```
         *  path \M12,15.5C10.07,15.5 8.5,13.93 8.5,12C8.5,10.07 10.07,8.5 12,8.5C13.93,8.5 15.5,10.07 15.5,12C15.5,13.93 13.93,15.5 12,15.5M19.43,12.97C19.47,12.65 19.5,12.33 19.5,12C19.5,11.67 19.47,11.34 19.43,11L21.54,9.37C21.73,9.22 21.78,8.95 21.66,8.73L19.66,5.27C19.54,5.05 19.27,4.96 19.05,5.05L16.56,6.05C16.04,5.66 15.5,5.32 14.87,5.07L14.5,2.42C14.46,2.18 14.25,2 14,2H10C9.75,2 9.54,2.18 9.5,2.42L9.13,5.07C8.5,5.32 7.96,5.66 7.44,6.05L4.95,5.05C4.73,4.96 4.46,5.05 4.34,5.27L2.34,8.73C2.21,8.95 2.27,9.22 2.46,9.37L4.57,11C4.53,11.34 4.5,11.67 4.5,12C4.5,12.33 4.53,12.65 4.57,12.97L2.46,14.63C2.27,14.78 2.21,15.05 2.34,15.27L4.34,18.73C4.46,18.95 4.73,19.03 4.95,18.95L7.44,17.94C7.96,18.34 8.5,18.68 9.13,18.93L9.5,21.58C9.54,21.82 9.75,22 10,22H14C14.25,22 14.46,21.82 14.5,21.58L14.87,18.93C15.5,18.67 16.04,18.34 16.56,17.94L19.05,18.95C19.27,19.03 19.54,18.95 19.66,18.73L21.66,15.27C21.78,15.05 21.73,14.78 21.54,14.63L19.43,12.97Z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_close extends $mol_icon {
        /**
         *  ```
         *  path \M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    interface $mol_syntax_token {
        name: string;
        found: string;
        chunks: string[];
    }
    class $mol_syntax {
        constructor(lexems: {
            [name: string]: RegExp;
        });
        'lexems()': {
            [name: string]: RegExp;
        };
        lexems(): {
            [name: string]: RegExp;
        };
        'rules()': {
            regExp: RegExp;
            name: string;
            size: number;
        }[];
        rules(): {
            regExp: RegExp;
            name: string;
            size: number;
        }[];
        'regExp()': RegExp;
        regExp(): RegExp;
        tokenize(text: string): $mol_syntax_token[];
    }
}

declare namespace $ {
    class $mol_float extends $mol_view {
    }
}

declare namespace $ {
    class $mol_check extends $mol_button_minor {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_check_checked <= checked?val
         *  	aria-checked <= checked?val
         *  	role \checkbox
         *  ```
         **/
        attr(): {
            "mol_check_checked": any;
            "aria-checked": any;
            "role": string;
            "disabled": boolean;
            "tabindex": number;
            "title": string;
        };
        /**
         *  ```
         *  checked?val false
         *  ```
         **/
        checked(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sub /
         *  	<= Icon
         *  	<= label
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Icon null
         *  ```
         **/
        Icon(): any;
        /**
         *  ```
         *  label / <= Title
         *  ```
         **/
        label(): readonly any[];
        /**
         *  ```
         *  Title $mol_view sub / <= title
         *  ```
         **/
        Title(): $mol_view;
        /**
         *  ```
         *  title \
         *  ```
         **/
        title(): string;
    }
}

declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        event_click(next?: Event): void;
        sub(): any[];
    }
}

declare namespace $ {
    class $mol_icon_tick extends $mol_icon {
        /**
         *  ```
         *  path \M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_check_box extends $mol_check {
        /**
         *  ```
         *  Icon $mol_icon_tick
         *  ```
         **/
        Icon(): $mol_icon_tick;
    }
}

declare namespace $ {
    class $mol_check_expand extends $mol_check {
        /**
         *  ```
         *  minimal_height 32
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  Icon $mol_icon_chevron
         *  ```
         **/
        Icon(): $mol_icon_chevron;
        /**
         *  ```
         *  level 0
         *  ```
         **/
        level(): number;
        /**
         *  ```
         *  style *
         *  	^
         *  	paddingLeft <= level_style
         *  ```
         **/
        style(): {
            "paddingLeft": string;
        };
        /**
         *  ```
         *  level_style \0px
         *  ```
         **/
        level_style(): string;
        /**
         *  ```
         *  checked?val <=> expanded?val
         *  ```
         **/
        checked(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  expanded?val false
         *  ```
         **/
        expanded(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  enabled <= expandable
         *  ```
         **/
        enabled(): boolean;
        /**
         *  ```
         *  expandable false
         *  ```
         **/
        expandable(): boolean;
    }
}

declare namespace $.$$ {
    class $mol_check_expand extends $.$mol_check_expand {
        level_style(): string;
        expandable(): boolean;
    }
}

declare namespace $ {
    class $mol_grid extends $mol_scroll {
        /**
         *  ```
         *  row_ids /string[]
         *  ```
         **/
        row_ids(): readonly string[][];
        /**
         *  ```
         *  row_id!index null
         *  ```
         **/
        row_id(index: any): any;
        /**
         *  ```
         *  col_ids /
         *  ```
         **/
        col_ids(): readonly any[];
        /**
         *  ```
         *  records *
         *  ```
         **/
        records(): {};
        /**
         *  ```
         *  record!id null
         *  ```
         **/
        record(id: any): any;
        /**
         *  ```
         *  hierarchy null
         *  ```
         **/
        hierarchy(): any;
        /**
         *  ```
         *  hierarchy_col \
         *  ```
         **/
        hierarchy_col(): string;
        /**
         *  ```
         *  sub / <= Table
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Table $mol_grid_table
         *  	offset <= gap_top
         *  	sub <= rows_visible
         *  ```
         **/
        Table(): $$.$mol_grid_table;
        /**
         *  ```
         *  gap_top 0
         *  ```
         **/
        gap_top(): number;
        /**
         *  ```
         *  rows_visible /$mol_view
         *  ```
         **/
        rows_visible(): readonly $mol_view[];
        /**
         *  ```
         *  rows /
         *  ```
         **/
        rows(): readonly any[];
        /**
         *  ```
         *  Head $mol_grid_row
         *  	height <= row_height
         *  	cells <= head_cells
         *  ```
         **/
        Head(): $mol_grid_row;
        /**
         *  ```
         *  row_height 40
         *  ```
         **/
        row_height(): number;
        /**
         *  ```
         *  head_cells /$mol_view
         *  ```
         **/
        head_cells(): readonly $mol_view[];
        /**
         *  ```
         *  Row!id $mol_grid_row
         *  	height <= row_height
         *  	cells <= cells!id
         *  ```
         **/
        Row(id: any): $mol_grid_row;
        /**
         *  ```
         *  cells!id /$mol_view
         *  ```
         **/
        cells(id: any): readonly $mol_view[];
        /**
         *  ```
         *  Cell!id $mol_view
         *  ```
         **/
        Cell(id: any): $mol_view;
        /**
         *  ```
         *  cell!id null
         *  ```
         **/
        cell(id: any): any;
        /**
         *  ```
         *  Cell_text!id $mol_grid_cell sub <= cell_content_text!id
         *  ```
         **/
        Cell_text(id: any): $mol_grid_cell;
        /**
         *  ```
         *  cell_content_text!id <= cell_content!id
         *  ```
         **/
        cell_content_text(id: any): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  cell_content!id /$mol_view_content
         *  ```
         **/
        cell_content(id: any): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Cell_number!id $mol_grid_number sub <= cell_content_number!id
         *  ```
         **/
        Cell_number(id: any): $mol_grid_number;
        /**
         *  ```
         *  cell_content_number!id <= cell_content!id
         *  ```
         **/
        cell_content_number(id: any): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Col_head!id $mol_float
         *  	dom_name \th
         *  	sub <= col_head_content!id
         *  ```
         **/
        Col_head(id: any): $mol_float;
        /**
         *  ```
         *  col_head_content!id /$mol_view_content
         *  ```
         **/
        col_head_content(id: any): readonly (string | number | boolean | Node | $mol_view)[];
        /**
         *  ```
         *  Cell_branch!id $mol_check_expand
         *  	level <= cell_level!id
         *  	label <= cell_content!id
         *  	expanded?val <=> cell_expanded!id?val
         *  ```
         **/
        Cell_branch(id: any): $$.$mol_check_expand;
        /**
         *  ```
         *  cell_level!id 0
         *  ```
         **/
        cell_level(id: any): number;
        /**
         *  ```
         *  cell_expanded!id?val false
         *  ```
         **/
        cell_expanded(id: any, val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Cell_content!id / <= Cell_dimmer!id
         *  ```
         **/
        Cell_content(id: any): readonly any[];
        /**
         *  ```
         *  Cell_dimmer!id $mol_dimmer
         *  	needle <= needle
         *  	haystack <= cell_value!id
         *  ```
         **/
        Cell_dimmer(id: any): $$.$mol_dimmer;
        /**
         *  ```
         *  needle \
         *  ```
         **/
        needle(): string;
        /**
         *  ```
         *  cell_value!id \
         *  ```
         **/
        cell_value(id: any): string;
    }
}
declare namespace $ {
    class $mol_grid_table extends $mol_view {
        /**
         *  ```
         *  dom_name \table
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  style *
         *  	^
         *  	top <= offset
         *  ```
         **/
        style(): {
            "top": number;
        };
        /**
         *  ```
         *  offset 0
         *  ```
         **/
        offset(): number;
    }
}
declare namespace $ {
    class $mol_grid_gap extends $mol_view {
        /**
         *  ```
         *  style *
         *  	^
         *  	top <= offset
         *  ```
         **/
        style(): {
            "top": number;
        };
        /**
         *  ```
         *  offset 0
         *  ```
         **/
        offset(): number;
    }
}
declare namespace $ {
    class $mol_grid_row extends $mol_view {
        /**
         *  ```
         *  dom_name \tr
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  style *
         *  	^
         *  	height <= height
         *  ```
         **/
        style(): {
            "height": number;
        };
        /**
         *  ```
         *  height 40
         *  ```
         **/
        height(): number;
        /**
         *  ```
         *  sub <= cells
         *  ```
         **/
        sub(): readonly $mol_view[];
        /**
         *  ```
         *  cells /$mol_view
         *  ```
         **/
        cells(): readonly $mol_view[];
    }
}
declare namespace $ {
    class $mol_grid_cell extends $mol_view {
        /**
         *  ```
         *  dom_name \td
         *  ```
         **/
        dom_name(): string;
    }
}
declare namespace $ {
    class $mol_grid_number extends $mol_grid_cell {
    }
}

declare namespace $.$$ {
    interface $mol_grid_node {
        id: string;
        parent: $mol_grid_node;
        sub: $mol_grid_node[];
    }
    class $mol_grid extends $.$mol_grid {
        rows_visible(): $mol_view[];
        rows_visible_max(): number;
        view_window(): {
            top: number;
            bottom: number;
            count: number;
        };
        gap_top(): number;
        height(): number;
        content_height(): number;
        head_cells(): readonly $mol_view[];
        col_head_content(colId: string): readonly string[];
        rows(): readonly $mol_view[];
        cells(row_id: string[]): readonly $mol_view[];
        col_type(col_id: string): "number" | "text" | "branch";
        Cell(id: {
            row: string[];
            col: string;
        }): $mol_view;
        cell_content(id: {
            row: string[];
            col: string;
        }): any[];
        records(): any;
        record(id: string): any;
        record_ids(): string[];
        row_id(index: number): string;
        col_ids(): readonly string[];
        hierarchy(): {
            [id: string]: $mol_grid_node;
        };
        row_sub_ids(row: string[]): string[][];
        row_root_id(): string[];
        cell_level(id: {
            row: string[];
        }): number;
        row_ids(): readonly string[][];
        row_expanded(row_id: string[], next?: boolean): boolean;
        row_expanded_default(row_id: string[]): boolean;
        cell_expanded(id: {
            row: string[];
        }, next?: boolean): boolean;
    }
    class $mol_grid_table extends $.$mol_grid_table {
        readonly $$: $mol_ambient_context;
    }
}

declare namespace $ {
    class $mol_image extends $mol_view {
        /**
         *  ```
         *  dom_name \img
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  field *
         *  	^
         *  	src <= uri
         *  	alt <= title
         *  ```
         **/
        field(): {
            "src": string;
            "alt": string;
        };
        /**
         *  ```
         *  uri \
         *  ```
         **/
        uri(): string;
    }
}

declare namespace $ {
    class $mol_link_iconed extends $mol_link {
        /**
         *  ```
         *  sub / <= Icon
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Icon $mol_image uri <= icon
         *  ```
         **/
        Icon(): $mol_image;
        /**
         *  ```
         *  icon \
         *  ```
         **/
        icon(): string;
        /**
         *  ```
         *  content / <= title
         *  ```
         **/
        content(): readonly any[];
        /**
         *  ```
         *  title <= uri
         *  ```
         **/
        title(): string;
        /**
         *  ```
         *  host \
         *  ```
         **/
        host(): string;
    }
}

declare namespace $.$$ {
    class $mol_link_iconed extends $.$mol_link_iconed {
        icon(): string;
        host(): string;
        title(): string;
        sub(): any[];
    }
}

declare namespace $ {
    var $mol_syntax_md_flow: $mol_syntax;
    var $mol_syntax_md_line: $mol_syntax;
    const $mol_syntax_md_code: $mol_syntax;
}

declare namespace $ {
    class $mol_text extends $mol_list {
        /**
         *  ```
         *  uri_base \
         *  ```
         **/
        uri_base(): string;
        /**
         *  ```
         *  text \
         *  ```
         **/
        text(): string;
        /**
         *  ```
         *  tokens /$mol_syntax_token
         *  ```
         **/
        tokens(): readonly $mol_syntax_token[];
        /**
         *  ```
         *  Quote!id $mol_text text <= quote_text!id
         *  ```
         **/
        Quote(id: any): $$.$mol_text;
        /**
         *  ```
         *  quote_text!id \
         *  ```
         **/
        quote_text(id: any): string;
        /**
         *  ```
         *  Row!id $mol_text_row
         *  	sub <= block_content!id
         *  	type <= block_type!id
         *  ```
         **/
        Row(id: any): $mol_text_row;
        /**
         *  ```
         *  block_content!id /
         *  ```
         **/
        block_content(id: any): readonly any[];
        /**
         *  ```
         *  block_type!id \
         *  ```
         **/
        block_type(id: any): string;
        /**
         *  ```
         *  Span!id $mol_text_span
         *  ```
         **/
        Span(id: any): $mol_text_span;
        /**
         *  ```
         *  Link!id $mol_text_link
         *  ```
         **/
        Link(id: any): $mol_text_link;
        /**
         *  ```
         *  Image!id $mol_text_image
         *  ```
         **/
        Image(id: any): $mol_text_image;
        /**
         *  ```
         *  Header!id $mol_text_header
         *  	level <= header_level!id
         *  	content <= header_content!id
         *  ```
         **/
        Header(id: any): $mol_text_header;
        /**
         *  ```
         *  header_level!id 0
         *  ```
         **/
        header_level(id: any): number;
        /**
         *  ```
         *  header_content!id /
         *  ```
         **/
        header_content(id: any): readonly any[];
        /**
         *  ```
         *  Table!id $mol_grid
         *  	head_cells <= table_head_cells!id
         *  	rows <= table_rows!id
         *  ```
         **/
        Table(id: any): $$.$mol_grid;
        /**
         *  ```
         *  table_head_cells!id /
         *  ```
         **/
        table_head_cells(id: any): readonly any[];
        /**
         *  ```
         *  table_rows!id /
         *  ```
         **/
        table_rows(id: any): readonly any[];
        /**
         *  ```
         *  Table_row!id $mol_grid_row cells <= table_cells!id
         *  ```
         **/
        Table_row(id: any): $mol_grid_row;
        /**
         *  ```
         *  table_cells!id /
         *  ```
         **/
        table_cells(id: any): readonly any[];
        /**
         *  ```
         *  Table_cell!id $mol_grid_cell sub <= table_cell_content!id
         *  ```
         **/
        Table_cell(id: any): $mol_grid_cell;
        /**
         *  ```
         *  table_cell_content!id /
         *  ```
         **/
        table_cell_content(id: any): readonly any[];
        /**
         *  ```
         *  Table_cell_head!id $mol_float sub <= table_cell_content!id
         *  ```
         **/
        Table_cell_head(id: any): $mol_float;
    }
}
declare namespace $ {
    class $mol_text_row extends $mol_view {
        /**
         *  ```
         *  minimal_height 40
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_text_type <= type
         *  ```
         **/
        attr(): {
            "mol_text_type": string;
        };
        /**
         *  ```
         *  type \
         *  ```
         **/
        type(): string;
    }
}
declare namespace $ {
    class $mol_text_header extends $mol_view {
        /**
         *  ```
         *  dom_name \h
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  minimal_height 50
         *  ```
         **/
        minimal_height(): number;
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_text_header_level <= level?val
         *  ```
         **/
        attr(): {
            "mol_text_header_level": any;
        };
        /**
         *  ```
         *  level?val 0
         *  ```
         **/
        level(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sub <= content
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  content /
         *  ```
         **/
        content(): readonly any[];
    }
}
declare namespace $ {
    class $mol_text_span extends $mol_view {
        /**
         *  ```
         *  dom_name \span
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_text_type <= type?val
         *  ```
         **/
        attr(): {
            "mol_text_type": any;
        };
        /**
         *  ```
         *  type?val \
         *  ```
         **/
        type(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sub <= content?val
         *  ```
         **/
        sub(): any;
        /**
         *  ```
         *  content?val /
         *  ```
         **/
        content(val?: any, force?: $mol_mem_force): any;
    }
}
declare namespace $ {
    class $mol_text_link extends $mol_link_iconed {
        /**
         *  ```
         *  attr *
         *  	^
         *  	mol_text_type <= type?val
         *  ```
         **/
        attr(): {
            "mol_text_type": any;
            "href": string;
            "title": string;
            "target": string;
            "download": string;
            "mol_link_current": boolean;
        };
        /**
         *  ```
         *  type?val \
         *  ```
         **/
        type(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  uri <= link?val
         *  ```
         **/
        uri(): any;
        /**
         *  ```
         *  link?val \
         *  ```
         **/
        link(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  content?val /
         *  ```
         **/
        content(val?: any, force?: $mol_mem_force): any;
    }
}
declare namespace $ {
    class $mol_text_image extends $mol_view {
        /**
         *  ```
         *  dom_name \object
         *  ```
         **/
        dom_name(): string;
        /**
         *  ```
         *  attr *
         *  	^
         *  	allowfullscreen true
         *  	mol_text_type <= type?val
         *  	data <= link?val
         *  ```
         **/
        attr(): {
            "allowfullscreen": boolean;
            "mol_text_type": any;
            "data": any;
        };
        /**
         *  ```
         *  type?val \
         *  ```
         **/
        type(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  link?val \
         *  ```
         **/
        link(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sub / <= title?val
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  title?val \
         *  ```
         **/
        title(val?: any, force?: $mol_mem_force): any;
    }
}

declare namespace $.$$ {
    class $mol_text extends $.$mol_text {
        tokens(): readonly $mol_syntax_token[];
        rows(): ($mol_grid | $mol_text | $mol_text_row | $mol_text_header)[];
        header_level(index: number): number;
        header_content(index: number): ($mol_text_span | $mol_text_link | $mol_text_image)[];
        quote_text(index: number): string;
        block_type(index: number): string;
        cell_contents(indexBlock: number): string[][];
        table_rows(blockId: number): $mol_grid_row[];
        table_head_cells(blockId: number): $mol_float[];
        table_cells(id: {
            block: number;
            row: number;
        }): $mol_grid_cell[];
        table_cell_content(id: {
            block: number;
            row: number;
            cell: number;
        }): ($mol_text_span | $mol_text_link | $mol_text_image)[];
        uri_base(): string;
        uri_resolve(uri: string): string;
        text2spans(prefix: string, text: string): ($mol_text_span | $mol_text_link | $mol_text_image)[];
        code2spans(prefix: string, text: string): $mol_text_span[];
        block_content(indexBlock: number): ($mol_view | string)[];
    }
}

declare namespace $ {
    class $mol_textarea extends $mol_view {
        /**
         *  ```
         *  event * keydown?event <=> press?event
         *  ```
         **/
        event(): {
            "keydown": (event?: any) => any;
        };
        /**
         *  ```
         *  press?event null
         *  ```
         **/
        press(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  sub /
         *  	<= Edit
         *  	<= View
         *  ```
         **/
        sub(): readonly any[];
        /**
         *  ```
         *  Edit $mol_string
         *  	dom_name \textarea
         *  	value?val <=> value?val
         *  	hint <= hint
         *  	debounce 0
         *  	enabled <= enabled
         *  ```
         **/
        Edit(): $$.$mol_string;
        /**
         *  ```
         *  value?val \
         *  ```
         **/
        value(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  hint \
         *  ```
         **/
        hint(): string;
        /**
         *  ```
         *  enabled true
         *  ```
         **/
        enabled(): boolean;
        /**
         *  ```
         *  View $mol_text text <= text
         *  ```
         **/
        View(): $$.$mol_text;
        /**
         *  ```
         *  text \
         *  ```
         **/
        text(): string;
    }
}

declare namespace $.$$ {
    class $mol_textarea extends $.$mol_textarea {
        text(): any;
        indent_inc(): void;
        indent_dec(): void;
        press(event: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_icon_folder extends $mol_icon {
        /**
         *  ```
         *  path \M10,4H4C2.89,4 2,4.89 2,6V18C2,19.1 2.9,20 4,20H20C21.1,20 22,19.1 22,18V8C22,6.89 21.1,6 20,6H12L10,4Z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_card extends $mol_icon {
        /**
         *  ```
         *  path \M20,20H4C2.9,20 2,19.1 2,18V6C2,4.9 2.9,4 4,4H20C21.1,4 22,4.9 22,6V18C22,19.1 21.1,20 20,20Z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_card_text extends $mol_icon {
        /**
         *  ```
         *  path \M20,20H4C2.9,20 2,19.1 2,18V6C2,4.9 2.9,4 4,4H20C21.1,4 22,4.9 22,6V18C22,19.1 21.1,20 20,20M5,13V15H16V13H5M5,9V11H19V9H5Z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_card_text_outline extends $mol_icon {
        /**
         *  ```
         *  path \M20,20H4C2.9,20 2,19.1 2,18V6C2,4.9 2.9,4 4,4H20C21.1,4 22,4.9 22,6V18C22,19.1 21.1,20 20,20M4,6V18H20V6H4M6,9H18V11H6V9M6,13H16V15H6V13Z
         *  ```
         **/
        path(): string;
    }
}

declare namespace $ {
    class $mol_unit extends $mol_object {
        'valueOf()': number;
        constructor(value?: number);
        prefix(): string;
        postfix(): string;
        valueOf(): number;
        delimiter(): string;
        value_view(): string;
        toString(): string;
        static summ(a: $mol_unit, b: $mol_unit): any;
        mult(m: number): this;
    }
}

declare namespace $ {
    class $mol_unit_money extends $mol_unit {
    }
    class $mol_unit_money_usd extends $mol_unit_money {
        prefix(): string;
    }
    class $mol_unit_money_rur extends $mol_unit_money {
        postfix(): string;
    }
}

declare namespace $ {
    class $mol_time_base {
        static patterns: any;
        static formatter(pattern: string): any;
        toString(pattern: string): string;
    }
}

declare namespace $ {
    type $mol_time_duration_config = number | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
    };
    class $mol_time_duration extends $mol_time_base {
        constructor(config?: $mol_time_duration_config);
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        summ(config: $mol_time_duration_config): $mol_time_duration;
        mult(numb: number): $mol_time_duration;
        count(config: $mol_time_duration_config): number;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        static patterns: {
            '#Y': (duration: $mol_time_duration) => string;
            '#M': (duration: $mol_time_duration) => string;
            '#D': (duration: $mol_time_duration) => string;
            '#h': (duration: $mol_time_duration) => string;
            '#m': (duration: $mol_time_duration) => string;
            '#s': (duration: $mol_time_duration) => string;
            '+hh': (duration: $mol_time_duration) => string;
            'mm': (duration: $mol_time_duration) => string;
        };
    }
}

declare namespace $ {
    type $mol_time_moment_config = number | Date | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
        offset?: $mol_time_duration_config;
    };
    class $mol_time_moment extends $mol_time_base {
        constructor(config?: $mol_time_moment_config);
        readonly year: number | undefined;
        readonly month: number | undefined;
        readonly day: number | undefined;
        readonly hour: number | undefined;
        readonly minute: number | undefined;
        readonly second: number | undefined;
        readonly offset: $mol_time_duration | undefined;
        readonly weekday: number;
        private _native;
        readonly native: Date;
        private _normal;
        readonly normal: $mol_time_moment;
        merge(config: $mol_time_moment_config): $mol_time_moment;
        shift(config: $mol_time_duration_config): $mol_time_moment;
        toOffset(config: $mol_time_duration_config): $mol_time_moment;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        static patterns: {
            'YYYY': (moment: $mol_time_moment) => string;
            'AD': (moment: $mol_time_moment) => string;
            'YY': (moment: $mol_time_moment) => string;
            'Month': (moment: $mol_time_moment) => string;
            'DD Month': (moment: $mol_time_moment) => string;
            'D Month': (moment: $mol_time_moment) => string;
            'Mon': (moment: $mol_time_moment) => string;
            'DD Mon': (moment: $mol_time_moment) => string;
            'D Mon': (moment: $mol_time_moment) => string;
            '-MM': (moment: $mol_time_moment) => string;
            'MM': (moment: $mol_time_moment) => string;
            'M': (moment: $mol_time_moment) => string;
            'WeekDay': (moment: $mol_time_moment) => string;
            'WD': (moment: $mol_time_moment) => string;
            '-DD': (moment: $mol_time_moment) => string;
            'DD': (moment: $mol_time_moment) => string;
            'D': (moment: $mol_time_moment) => string;
            'Thh': (moment: $mol_time_moment) => string;
            'hh': (moment: $mol_time_moment) => string;
            'h': (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            'mm': (moment: $mol_time_moment) => string;
            'm': (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            'ss': (moment: $mol_time_moment) => string;
            's': (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            'sss': (moment: $mol_time_moment) => string;
            'Z': (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    function $mol_stub_select_random<Value>(list: Value[]): Value;
    function $mol_stub_strings(prefix?: string, count?: number, length?: number): any[];
    function $mol_stub_code(length?: number): string;
    function $mol_stub_price(max?: number): $mol_unit_money_usd;
    function $mol_stub_product_name(): string;
    function $mol_stub_company_name_big(): string;
    function $mol_stub_company_name_small(): string;
    function $mol_stub_company_name(): string;
    function $mol_stub_person_name(): string;
    function $mol_stub_city(): string;
    function $mol_stub_time(maxShift?: number): $mol_time_moment;
}

declare namespace $ {
    class $hyoo_notes extends $mol_book {
        /**
         *  ```
         *  pages /
         *  	<= Tags_page
         *  	<= Notes_page
         *  	<= Note_page
         *  	<= Tagging_page
         *  ```
         **/
        pages(): readonly any[];
        /**
         *  ```
         *  Tags_page $mol_page
         *  	minimal_width 300
         *  	title <= tags_title
         *  	event_top?val <=> event_front_up?val
         *  	tools / <= Tags_all
         *  	body <= tags_body
         *  ```
         **/
        Tags_page(): $$.$mol_page;
        /**
         *  ```
         *  tags_title @ \Tags
         *  ```
         **/
        tags_title(): string;
        /**
         *  ```
         *  Tags_all $mol_link
         *  	arg * tag null
         *  	sub / <= Tags_all_icon
         *  ```
         **/
        Tags_all(): $$.$mol_link;
        /**
         *  ```
         *  Tags_all_icon $mol_icon_filter_remove
         *  ```
         **/
        Tags_all_icon(): $mol_icon_filter_remove;
        /**
         *  ```
         *  tags_body /
         *  	<= Tag_filter
         *  	<= Tag_add
         *  	<= Tag_list
         *  ```
         **/
        tags_body(): readonly any[];
        /**
         *  ```
         *  Tag_filter $mol_search
         *  	query?val <=> tag_filter?val
         *  	hint <= tag_filter_hint
         *  ```
         **/
        Tag_filter(): $$.$mol_search;
        /**
         *  ```
         *  tag_filter?val \
         *  ```
         **/
        tag_filter(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  tag_filter_hint @ \Search or add...
         *  ```
         **/
        tag_filter_hint(): string;
        /**
         *  ```
         *  Tag_add $mol_button_minor
         *  	sub /
         *  		<= Tag_add_icon
         *  		<= tag_add_title
         *  	click?event <=> tag_add?event
         *  ```
         **/
        Tag_add(): $mol_button_minor;
        /**
         *  ```
         *  Tag_add_icon $mol_icon_plus
         *  ```
         **/
        Tag_add_icon(): $mol_icon_plus;
        /**
         *  ```
         *  tag_add_title @ \Add this tag
         *  ```
         **/
        tag_add_title(): string;
        /**
         *  ```
         *  tag_add?event null
         *  ```
         **/
        tag_add(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Tag_list $mol_list rows <= tag_rows
         *  ```
         **/
        Tag_list(): $$.$mol_list;
        /**
         *  ```
         *  tag_rows /
         *  ```
         **/
        tag_rows(): readonly any[];
        /**
         *  ```
         *  Notes_page $mol_page
         *  	minimal_width 500
         *  	title <= notes_title
         *  	event_top?val <=> event_front_up?val
         *  	tools / <= Note_add
         *  	body <= notes_body
         *  ```
         **/
        Notes_page(): $$.$mol_page;
        /**
         *  ```
         *  notes_title @ \Notes
         *  ```
         **/
        notes_title(): string;
        /**
         *  ```
         *  Note_add $mol_button_major
         *  	sub / <= Note_add_icon
         *  	click?event <=> note_add?event
         *  ```
         **/
        Note_add(): $mol_button_major;
        /**
         *  ```
         *  Note_add_icon $mol_icon_plus
         *  ```
         **/
        Note_add_icon(): $mol_icon_plus;
        /**
         *  ```
         *  note_add?event null
         *  ```
         **/
        note_add(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  notes_body /
         *  	<= Note_filter
         *  	<= Notes_list
         *  	<= Tag_drop
         *  ```
         **/
        notes_body(): readonly any[];
        /**
         *  ```
         *  Note_filter $mol_search query?val <=> note_filter?val
         *  ```
         **/
        Note_filter(): $$.$mol_search;
        /**
         *  ```
         *  note_filter?val \
         *  ```
         **/
        note_filter(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Notes_list $mol_list
         *  	rows <= note_rows
         *  	Empty <= Note_add_hint
         *  ```
         **/
        Notes_list(): $$.$mol_list;
        /**
         *  ```
         *  note_rows /
         *  ```
         **/
        note_rows(): readonly any[];
        /**
         *  ```
         *  Note_add_hint $mol_view sub /
         *  	<= notes_list_add_title
         *  	<= Notes_list_add_icon
         *  ```
         **/
        Note_add_hint(): $mol_view;
        /**
         *  ```
         *  notes_list_add_title @ \Add new
         *  ```
         **/
        notes_list_add_title(): string;
        /**
         *  ```
         *  Notes_list_add_icon $mol_icon_arrow_up_bold
         *  ```
         **/
        Notes_list_add_icon(): $mol_icon_arrow_up_bold;
        /**
         *  ```
         *  Tag_drop $mol_button_minor
         *  	title <= tag_drop_title
         *  	click?event <=> tag_drop?event
         *  ```
         **/
        Tag_drop(): $mol_button_minor;
        /**
         *  ```
         *  tag_drop_title @ \Delete tag
         *  ```
         **/
        tag_drop_title(): string;
        /**
         *  ```
         *  tag_drop?event null
         *  ```
         **/
        tag_drop(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Note_page $mol_page
         *  	minimal_width 800
         *  	title <= note_current_title
         *  	event_top?val <=> event_front_up?val
         *  	tools /
         *  		<= Note_tags_manage
         *  		<= Note_close
         *  	body / <= Note_content
         *  ```
         **/
        Note_page(): $$.$mol_page;
        /**
         *  ```
         *  note_current_title \
         *  ```
         **/
        note_current_title(): string;
        /**
         *  ```
         *  Note_tags_manage $mol_link
         *  	sub / <= Note_tags_manage_icon
         *  	arg * tagging \
         *  ```
         **/
        Note_tags_manage(): $$.$mol_link;
        /**
         *  ```
         *  Note_tags_manage_icon $mol_icon_settings
         *  ```
         **/
        Note_tags_manage_icon(): $mol_icon_settings;
        /**
         *  ```
         *  Note_close $mol_link
         *  	arg *
         *  		note null
         *  		tagging null
         *  	sub / <= Note_close_icon
         *  ```
         **/
        Note_close(): $$.$mol_link;
        /**
         *  ```
         *  Note_close_icon $mol_icon_close
         *  ```
         **/
        Note_close_icon(): $mol_icon_close;
        /**
         *  ```
         *  Note_content $mol_textarea
         *  	hint <= note_content_hint
         *  	value?val <=> note_current_content?val
         *  ```
         **/
        Note_content(): $$.$mol_textarea;
        /**
         *  ```
         *  note_content_hint @ \Note content
         *  ```
         **/
        note_content_hint(): string;
        /**
         *  ```
         *  note_current_content?val \
         *  ```
         **/
        note_current_content(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Tagging_page $mol_page
         *  	minimal_width 300
         *  	title <= tagging_title
         *  	event_top?val <=> event_front_up?val
         *  	tools / <= Tagging_close
         *  	body <= tagging_body
         *  ```
         **/
        Tagging_page(): $$.$mol_page;
        /**
         *  ```
         *  tagging_title @ \Note tags
         *  ```
         **/
        tagging_title(): string;
        /**
         *  ```
         *  Tagging_close $mol_link
         *  	arg * tagging null
         *  	sub / <= Tagging_close_icon
         *  ```
         **/
        Tagging_close(): $$.$mol_link;
        /**
         *  ```
         *  Tagging_close_icon $mol_icon_close
         *  ```
         **/
        Tagging_close_icon(): $mol_icon_close;
        /**
         *  ```
         *  tagging_body /
         *  	<= Tagging_filter
         *  	<= Tagging_add
         *  	<= Tagging_list
         *  	<= Note_drop
         *  ```
         **/
        tagging_body(): readonly any[];
        /**
         *  ```
         *  Tagging_filter $mol_search
         *  	query?val <=> tagging_filter?val
         *  	hint <= tag_filter_hint
         *  ```
         **/
        Tagging_filter(): $$.$mol_search;
        /**
         *  ```
         *  tagging_filter?val \
         *  ```
         **/
        tagging_filter(val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Tagging_add $mol_button_minor
         *  	sub /
         *  		<= Tagging_add_icon
         *  		<= tag_add_title
         *  	click?event <=> tagging_add?event
         *  ```
         **/
        Tagging_add(): $mol_button_minor;
        /**
         *  ```
         *  Tagging_add_icon $mol_icon_plus
         *  ```
         **/
        Tagging_add_icon(): $mol_icon_plus;
        /**
         *  ```
         *  tagging_add?event null
         *  ```
         **/
        tagging_add(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Tagging_list $mol_list rows <= tagging_rows
         *  ```
         **/
        Tagging_list(): $$.$mol_list;
        /**
         *  ```
         *  tagging_rows /
         *  ```
         **/
        tagging_rows(): readonly any[];
        /**
         *  ```
         *  Note_drop $mol_button_minor
         *  	title <= note_drop_title
         *  	click?event <=> note_drop?event
         *  ```
         **/
        Note_drop(): $mol_button_minor;
        /**
         *  ```
         *  note_drop_title @ \Delete note
         *  ```
         **/
        note_drop_title(): string;
        /**
         *  ```
         *  note_drop?event null
         *  ```
         **/
        note_drop(event?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Placeholder $mol_book_placeholder minimal_width 300
         *  ```
         **/
        Placeholder(): $mol_book_placeholder;
        /**
         *  ```
         *  note_default_title @ \New note
         *  ```
         **/
        note_default_title(): string;
        /**
         *  ```
         *  Tag_row!id $mol_link
         *  	sub /
         *  		<= Tag_icon!id
         *  		<= Tag_title!id
         *  	arg *
         *  		tag <= id!id
         *  		note null
         *  		tagging null
         *  ```
         **/
        Tag_row(id: any): $$.$mol_link;
        /**
         *  ```
         *  Tag_icon!id $mol_icon_folder
         *  ```
         **/
        Tag_icon(id: any): $mol_icon_folder;
        /**
         *  ```
         *  Tag_title!id $mol_dimmer
         *  	haystack <= tag_title!id
         *  	needle <= tag_filter
         *  ```
         **/
        Tag_title(id: any): $$.$mol_dimmer;
        /**
         *  ```
         *  tag_title!id \
         *  ```
         **/
        tag_title(id: any): string;
        /**
         *  ```
         *  id!id \
         *  ```
         **/
        id(id: any): string;
        /**
         *  ```
         *  Note_row!id $mol_link
         *  	sub /
         *  		<= Note_icon!id
         *  		<= Note_title!id
         *  	arg *
         *  		note <= id!id
         *  		tagging null
         *  ```
         **/
        Note_row(id: any): $$.$mol_link;
        /**
         *  ```
         *  Note_icon!id $mol_icon_card_text_outline
         *  ```
         **/
        Note_icon(id: any): $mol_icon_card_text_outline;
        /**
         *  ```
         *  Note_title!id $mol_dimmer
         *  	haystack <= note_title!id
         *  	needle <= note_filter
         *  ```
         **/
        Note_title(id: any): $$.$mol_dimmer;
        /**
         *  ```
         *  note_title!id \
         *  ```
         **/
        note_title(id: any): string;
        /**
         *  ```
         *  Tagging_tag_row!id $mol_check_box
         *  	checked?val <=> tagging_tag!id?val
         *  	label / <= Tagging_tag_title!id
         *  ```
         **/
        Tagging_tag_row(id: any): $mol_check_box;
        /**
         *  ```
         *  tagging_tag!id?val false
         *  ```
         **/
        tagging_tag(id: any, val?: any, force?: $mol_mem_force): any;
        /**
         *  ```
         *  Tagging_tag_title!id $mol_dimmer
         *  	haystack <= tag_title!id
         *  	needle <= tagging_filter
         *  ```
         **/
        Tagging_tag_title(id: any): $$.$mol_dimmer;
    }
}

declare namespace $.$$ {
    class $hyoo_notes extends $.$hyoo_notes {
        pages(): $mol_page[];
        note_ids(next?: string[]): string[];
        note_tags(id: string, next?: string[]): string[];
        note(next?: string | null): string;
        note_content(note: string, next?: string): string;
        note_current_content(next?: string): string;
        tag_ids(next?: string[]): string[];
        tag(next?: string | null): string;
        tagging(next?: boolean): boolean;
        tag_add_showed(): boolean;
        tags_body(): ($mol_button_minor | $mol_list | $mol_search)[];
        tagging_add_showed(): boolean;
        tagging_body(): ($mol_button_minor | $mol_list | $mol_search)[];
        notes_filter_showed(): boolean;
        notes_body(): ($mol_button_minor | $mol_list | $mol_search)[];
        tag_add(): void;
        tag_drop(): void;
        tagging_add(): void;
        tag_title(id: string): string;
        id(id: string): string;
        note_title(id: string): string;
        note_current_title(): string;
        tag_rows(): $mol_link[];
        tagging_rows(): $mol_check_box[];
        note_ids_available(): string[];
        note_rows(): $mol_link[];
        note_add(): void;
        note_drop(): void;
        notes_title(): string;
        tagging_tag(tag: string, next?: boolean): boolean;
    }
}
