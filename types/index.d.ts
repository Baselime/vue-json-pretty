import { Plugin } from 'vue';
declare const _default: {
    new (...args: any[]): {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: Partial<{
            data: import("./utils").JSONDataType;
            showLength: boolean;
            showMenu: boolean;
            showDoubleQuotes: boolean;
            showSelectController: boolean;
            showLine: boolean;
            showLineNumber: boolean;
            selectOnClickNode: boolean;
            nodeSelectable: (node: import("./components/TreeNode").NodeDataType) => boolean;
            highlightSelectedNode: boolean;
            showIcon: boolean;
            editable: boolean;
            editableTrigger: "click" | "dblclick";
            deep: number;
            pathCollapsible: (node: import("./components/TreeNode").NodeDataType) => boolean;
            rootPath: string;
            virtual: boolean;
            height: number;
            itemHeight: number;
            selectedValue: string | string[];
            collapsedOnClickBrackets: boolean;
        }> & Omit<Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: import("vue").PropType<import("./utils").JSONDataType>;
                default: null;
            };
            deep: {
                type: NumberConstructor;
                default: number;
            };
            pathCollapsible: {
                type: import("vue").PropType<(node: import("./components/TreeNode").NodeDataType) => boolean>;
                default: () => boolean;
            };
            rootPath: {
                type: StringConstructor;
                default: string;
            };
            virtual: {
                type: BooleanConstructor;
                default: boolean;
            };
            height: {
                type: NumberConstructor;
                default: number;
            };
            itemHeight: {
                type: NumberConstructor;
                default: number;
            };
            selectedValue: {
                type: import("vue").PropType<string | string[]>;
                default: () => string;
            };
            collapsedOnClickBrackets: {
                type: BooleanConstructor;
                default: boolean;
            };
            style: import("vue").PropType<import("vue").CSSProperties>;
            onSelectedChange: {
                type: import("vue").PropType<(newVal: string | string[], oldVal: string | string[]) => void>;
            };
            showLength: {
                type: BooleanConstructor;
                default: boolean;
            };
            showMenu: {
                type: BooleanConstructor;
                default: boolean;
            };
            showDoubleQuotes: {
                type: BooleanConstructor;
                default: boolean;
            };
            renderNodeKey: import("vue").PropType<(opt: {
                node: import("./components/TreeNode").NodeDataType;
                defaultKey: string | JSX.Element;
            }) => unknown>;
            renderNodeValue: import("vue").PropType<(opt: {
                node: import("./components/TreeNode").NodeDataType;
                defaultValue: string | JSX.Element;
            }) => unknown>;
            selectableType: import("vue").PropType<"" | "multiple" | "single">;
            showSelectController: {
                type: BooleanConstructor;
                default: boolean;
            };
            showLine: {
                type: BooleanConstructor;
                default: boolean;
            };
            showLineNumber: {
                type: BooleanConstructor;
                default: boolean;
            };
            selectOnClickNode: {
                type: BooleanConstructor;
                default: boolean;
            };
            nodeSelectable: {
                type: import("vue").PropType<(node: import("./components/TreeNode").NodeDataType) => boolean>;
                default: () => boolean;
            };
            highlightSelectedNode: {
                type: BooleanConstructor;
                default: boolean;
            };
            showIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
            editable: {
                type: BooleanConstructor;
                default: boolean;
            };
            editableTrigger: {
                type: import("vue").PropType<"click" | "dblclick">;
                default: string;
            };
            onNodeClick: {
                type: import("vue").PropType<(data: {
                    data: import("./components/TreeNode").NodeDataType & {
                        dataType: string;
                    };
                    event: MouseEvent;
                }) => void>;
            };
            onValueClick: {
                type: import("vue").PropType<(data: {
                    data: import("./components/TreeNode").NodeDataType & {
                        dataType: string;
                    };
                    event: MouseEvent;
                }) => void>;
            };
            onKeyClick: {
                type: import("vue").PropType<(data: {
                    data: import("./components/TreeNode").NodeDataType & {
                        dataType: string;
                    };
                    event: MouseEvent;
                }) => void>;
            };
            onBracketsClick: {
                type: import("vue").PropType<(collapsed: boolean, path: string) => void>;
            };
            handleMenuClick: {
                type: import("vue").PropType<(menu: boolean, path: string) => void>;
            };
            onIconClick: {
                type: import("vue").PropType<(collapsed: boolean, path: string) => void>;
            };
            onValueChange: {
                type: import("vue").PropType<(value: boolean, path: string) => void>;
            };
        }>> & {
            onNodeClick?: ((...args: any[]) => any) | undefined;
            onBracketsClick?: ((...args: any[]) => any) | undefined;
            onMenuClick?: ((...args: any[]) => any) | undefined;
            onIconClick?: ((...args: any[]) => any) | undefined;
            onSelectedChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:selectedValue"?: ((...args: any[]) => any) | undefined;
            "onUpdate:data"?: ((...args: any[]) => any) | undefined;
            onNodeValueClick?: ((...args: any[]) => any) | undefined;
            onNodeKeyClick?: ((...args: any[]) => any) | undefined;
        } & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, "data" | "showLength" | "showMenu" | "showDoubleQuotes" | "showSelectController" | "showLine" | "showLineNumber" | "selectOnClickNode" | "nodeSelectable" | "highlightSelectedNode" | "showIcon" | "editable" | "editableTrigger" | "deep" | "pathCollapsible" | "rootPath" | "virtual" | "height" | "itemHeight" | "selectedValue" | "collapsedOnClickBrackets">;
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: "nodeClick" | "bracketsClick" | "menuClick" | "iconClick" | "selectedChange" | "update:selectedValue" | "update:data" | "nodeValueClick" | "nodeKeyClick", ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
            data: {
                type: import("vue").PropType<import("./utils").JSONDataType>;
                default: null;
            };
            deep: {
                type: NumberConstructor;
                default: number;
            };
            pathCollapsible: {
                type: import("vue").PropType<(node: import("./components/TreeNode").NodeDataType) => boolean>;
                default: () => boolean;
            };
            rootPath: {
                type: StringConstructor;
                default: string;
            };
            virtual: {
                type: BooleanConstructor;
                default: boolean;
            };
            height: {
                type: NumberConstructor;
                default: number;
            };
            itemHeight: {
                type: NumberConstructor;
                default: number;
            };
            selectedValue: {
                type: import("vue").PropType<string | string[]>;
                default: () => string;
            };
            collapsedOnClickBrackets: {
                type: BooleanConstructor;
                default: boolean;
            };
            style: import("vue").PropType<import("vue").CSSProperties>;
            onSelectedChange: {
                type: import("vue").PropType<(newVal: string | string[], oldVal: string | string[]) => void>;
            };
            showLength: {
                type: BooleanConstructor;
                default: boolean;
            };
            showMenu: {
                type: BooleanConstructor;
                default: boolean;
            };
            showDoubleQuotes: {
                type: BooleanConstructor;
                default: boolean;
            };
            renderNodeKey: import("vue").PropType<(opt: {
                node: import("./components/TreeNode").NodeDataType;
                defaultKey: string | JSX.Element;
            }) => unknown>;
            renderNodeValue: import("vue").PropType<(opt: {
                node: import("./components/TreeNode").NodeDataType;
                defaultValue: string | JSX.Element;
            }) => unknown>;
            selectableType: import("vue").PropType<"" | "multiple" | "single">;
            showSelectController: {
                type: BooleanConstructor;
                default: boolean;
            };
            showLine: {
                type: BooleanConstructor;
                default: boolean;
            };
            showLineNumber: {
                type: BooleanConstructor;
                default: boolean;
            };
            selectOnClickNode: {
                type: BooleanConstructor;
                default: boolean;
            };
            nodeSelectable: {
                type: import("vue").PropType<(node: import("./components/TreeNode").NodeDataType) => boolean>;
                default: () => boolean;
            };
            highlightSelectedNode: {
                type: BooleanConstructor;
                default: boolean;
            };
            showIcon: {
                type: BooleanConstructor;
                default: boolean;
            };
            editable: {
                type: BooleanConstructor;
                default: boolean;
            };
            editableTrigger: {
                type: import("vue").PropType<"click" | "dblclick">;
                default: string;
            };
            onNodeClick: {
                type: import("vue").PropType<(data: {
                    data: import("./components/TreeNode").NodeDataType & {
                        dataType: string;
                    };
                    event: MouseEvent;
                }) => void>;
            };
            onValueClick: {
                type: import("vue").PropType<(data: {
                    data: import("./components/TreeNode").NodeDataType & {
                        dataType: string;
                    };
                    event: MouseEvent;
                }) => void>;
            };
            onKeyClick: {
                type: import("vue").PropType<(data: {
                    data: import("./components/TreeNode").NodeDataType & {
                        dataType: string;
                    };
                    event: MouseEvent;
                }) => void>;
            };
            onBracketsClick: {
                type: import("vue").PropType<(collapsed: boolean, path: string) => void>;
            };
            handleMenuClick: {
                type: import("vue").PropType<(menu: boolean, path: string) => void>;
            };
            onIconClick: {
                type: import("vue").PropType<(collapsed: boolean, path: string) => void>;
            };
            onValueChange: {
                type: import("vue").PropType<(value: boolean, path: string) => void>;
            };
        }>> & {
            onNodeClick?: ((...args: any[]) => any) | undefined;
            onBracketsClick?: ((...args: any[]) => any) | undefined;
            onMenuClick?: ((...args: any[]) => any) | undefined;
            onIconClick?: ((...args: any[]) => any) | undefined;
            onSelectedChange?: ((...args: any[]) => any) | undefined;
            "onUpdate:selectedValue"?: ((...args: any[]) => any) | undefined;
            "onUpdate:data"?: ((...args: any[]) => any) | undefined;
            onNodeValueClick?: ((...args: any[]) => any) | undefined;
            onNodeKeyClick?: ((...args: any[]) => any) | undefined;
        }, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("nodeClick" | "bracketsClick" | "menuClick" | "iconClick" | "selectedChange" | "update:selectedValue" | "update:data" | "nodeValueClick" | "nodeKeyClick")[], string, {
            data: import("./utils").JSONDataType;
            showLength: boolean;
            showMenu: boolean;
            showDoubleQuotes: boolean;
            showSelectController: boolean;
            showLine: boolean;
            showLineNumber: boolean;
            selectOnClickNode: boolean;
            nodeSelectable: (node: import("./components/TreeNode").NodeDataType) => boolean;
            highlightSelectedNode: boolean;
            showIcon: boolean;
            editable: boolean;
            editableTrigger: "click" | "dblclick";
            deep: number;
            pathCollapsible: (node: import("./components/TreeNode").NodeDataType) => boolean;
            rootPath: string;
            virtual: boolean;
            height: number;
            itemHeight: number;
            selectedValue: string | string[];
            collapsedOnClickBrackets: boolean;
        }> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: import("vue").ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
    } & Readonly<import("vue").ExtractPropTypes<{
        data: {
            type: import("vue").PropType<import("./utils").JSONDataType>;
            default: null;
        };
        deep: {
            type: NumberConstructor;
            default: number;
        };
        pathCollapsible: {
            type: import("vue").PropType<(node: import("./components/TreeNode").NodeDataType) => boolean>;
            default: () => boolean;
        };
        rootPath: {
            type: StringConstructor;
            default: string;
        };
        virtual: {
            type: BooleanConstructor;
            default: boolean;
        };
        height: {
            type: NumberConstructor;
            default: number;
        };
        itemHeight: {
            type: NumberConstructor;
            default: number;
        };
        selectedValue: {
            type: import("vue").PropType<string | string[]>;
            default: () => string;
        };
        collapsedOnClickBrackets: {
            type: BooleanConstructor;
            default: boolean;
        };
        style: import("vue").PropType<import("vue").CSSProperties>;
        onSelectedChange: {
            type: import("vue").PropType<(newVal: string | string[], oldVal: string | string[]) => void>;
        };
        showLength: {
            type: BooleanConstructor;
            default: boolean;
        };
        showMenu: {
            type: BooleanConstructor;
            default: boolean;
        };
        showDoubleQuotes: {
            type: BooleanConstructor;
            default: boolean;
        };
        renderNodeKey: import("vue").PropType<(opt: {
            node: import("./components/TreeNode").NodeDataType;
            defaultKey: string | JSX.Element;
        }) => unknown>;
        renderNodeValue: import("vue").PropType<(opt: {
            node: import("./components/TreeNode").NodeDataType;
            defaultValue: string | JSX.Element;
        }) => unknown>;
        selectableType: import("vue").PropType<"" | "multiple" | "single">;
        showSelectController: {
            type: BooleanConstructor;
            default: boolean;
        };
        showLine: {
            type: BooleanConstructor;
            default: boolean;
        };
        showLineNumber: {
            type: BooleanConstructor;
            default: boolean;
        };
        selectOnClickNode: {
            type: BooleanConstructor;
            default: boolean;
        };
        nodeSelectable: {
            type: import("vue").PropType<(node: import("./components/TreeNode").NodeDataType) => boolean>;
            default: () => boolean;
        };
        highlightSelectedNode: {
            type: BooleanConstructor;
            default: boolean;
        };
        showIcon: {
            type: BooleanConstructor;
            default: boolean;
        };
        editable: {
            type: BooleanConstructor;
            default: boolean;
        };
        editableTrigger: {
            type: import("vue").PropType<"click" | "dblclick">;
            default: string;
        };
        onNodeClick: {
            type: import("vue").PropType<(data: {
                data: import("./components/TreeNode").NodeDataType & {
                    dataType: string;
                };
                event: MouseEvent;
            }) => void>;
        };
        onValueClick: {
            type: import("vue").PropType<(data: {
                data: import("./components/TreeNode").NodeDataType & {
                    dataType: string;
                };
                event: MouseEvent;
            }) => void>;
        };
        onKeyClick: {
            type: import("vue").PropType<(data: {
                data: import("./components/TreeNode").NodeDataType & {
                    dataType: string;
                };
                event: MouseEvent;
            }) => void>;
        };
        onBracketsClick: {
            type: import("vue").PropType<(collapsed: boolean, path: string) => void>;
        };
        handleMenuClick: {
            type: import("vue").PropType<(menu: boolean, path: string) => void>;
        };
        onIconClick: {
            type: import("vue").PropType<(collapsed: boolean, path: string) => void>;
        };
        onValueChange: {
            type: import("vue").PropType<(value: boolean, path: string) => void>;
        };
    }>> & {
        onNodeClick?: ((...args: any[]) => any) | undefined;
        onBracketsClick?: ((...args: any[]) => any) | undefined;
        onMenuClick?: ((...args: any[]) => any) | undefined;
        onIconClick?: ((...args: any[]) => any) | undefined;
        onSelectedChange?: ((...args: any[]) => any) | undefined;
        "onUpdate:selectedValue"?: ((...args: any[]) => any) | undefined;
        "onUpdate:data"?: ((...args: any[]) => any) | undefined;
        onNodeValueClick?: ((...args: any[]) => any) | undefined;
        onNodeKeyClick?: ((...args: any[]) => any) | undefined;
    } & import("vue").ShallowUnwrapRef<() => JSX.Element> & {} & import("vue").ComponentCustomProperties;
    __isFragment?: undefined;
    __isTeleport?: undefined;
    __isSuspense?: undefined;
} & import("vue").ComponentOptionsBase<Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<import("./utils").JSONDataType>;
        default: null;
    };
    deep: {
        type: NumberConstructor;
        default: number;
    };
    pathCollapsible: {
        type: import("vue").PropType<(node: import("./components/TreeNode").NodeDataType) => boolean>;
        default: () => boolean;
    };
    rootPath: {
        type: StringConstructor;
        default: string;
    };
    virtual: {
        type: BooleanConstructor;
        default: boolean;
    };
    height: {
        type: NumberConstructor;
        default: number;
    };
    itemHeight: {
        type: NumberConstructor;
        default: number;
    };
    selectedValue: {
        type: import("vue").PropType<string | string[]>;
        default: () => string;
    };
    collapsedOnClickBrackets: {
        type: BooleanConstructor;
        default: boolean;
    };
    style: import("vue").PropType<import("vue").CSSProperties>;
    onSelectedChange: {
        type: import("vue").PropType<(newVal: string | string[], oldVal: string | string[]) => void>;
    };
    showLength: {
        type: BooleanConstructor;
        default: boolean;
    };
    showMenu: {
        type: BooleanConstructor;
        default: boolean;
    };
    showDoubleQuotes: {
        type: BooleanConstructor;
        default: boolean;
    };
    renderNodeKey: import("vue").PropType<(opt: {
        node: import("./components/TreeNode").NodeDataType;
        defaultKey: string | JSX.Element;
    }) => unknown>;
    renderNodeValue: import("vue").PropType<(opt: {
        node: import("./components/TreeNode").NodeDataType;
        defaultValue: string | JSX.Element;
    }) => unknown>;
    selectableType: import("vue").PropType<"" | "multiple" | "single">;
    showSelectController: {
        type: BooleanConstructor;
        default: boolean;
    };
    showLine: {
        type: BooleanConstructor;
        default: boolean;
    };
    showLineNumber: {
        type: BooleanConstructor;
        default: boolean;
    };
    selectOnClickNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    nodeSelectable: {
        type: import("vue").PropType<(node: import("./components/TreeNode").NodeDataType) => boolean>;
        default: () => boolean;
    };
    highlightSelectedNode: {
        type: BooleanConstructor;
        default: boolean;
    };
    showIcon: {
        type: BooleanConstructor;
        default: boolean;
    };
    editable: {
        type: BooleanConstructor;
        default: boolean;
    };
    editableTrigger: {
        type: import("vue").PropType<"click" | "dblclick">;
        default: string;
    };
    onNodeClick: {
        type: import("vue").PropType<(data: {
            data: import("./components/TreeNode").NodeDataType & {
                dataType: string;
            };
            event: MouseEvent;
        }) => void>;
    };
    onValueClick: {
        type: import("vue").PropType<(data: {
            data: import("./components/TreeNode").NodeDataType & {
                dataType: string;
            };
            event: MouseEvent;
        }) => void>;
    };
    onKeyClick: {
        type: import("vue").PropType<(data: {
            data: import("./components/TreeNode").NodeDataType & {
                dataType: string;
            };
            event: MouseEvent;
        }) => void>;
    };
    onBracketsClick: {
        type: import("vue").PropType<(collapsed: boolean, path: string) => void>;
    };
    handleMenuClick: {
        type: import("vue").PropType<(menu: boolean, path: string) => void>;
    };
    onIconClick: {
        type: import("vue").PropType<(collapsed: boolean, path: string) => void>;
    };
    onValueChange: {
        type: import("vue").PropType<(value: boolean, path: string) => void>;
    };
}>> & {
    onNodeClick?: ((...args: any[]) => any) | undefined;
    onBracketsClick?: ((...args: any[]) => any) | undefined;
    onMenuClick?: ((...args: any[]) => any) | undefined;
    onIconClick?: ((...args: any[]) => any) | undefined;
    onSelectedChange?: ((...args: any[]) => any) | undefined;
    "onUpdate:selectedValue"?: ((...args: any[]) => any) | undefined;
    "onUpdate:data"?: ((...args: any[]) => any) | undefined;
    onNodeValueClick?: ((...args: any[]) => any) | undefined;
    onNodeKeyClick?: ((...args: any[]) => any) | undefined;
}, () => JSX.Element, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("nodeClick" | "bracketsClick" | "menuClick" | "iconClick" | "selectedChange" | "update:selectedValue" | "update:data" | "nodeValueClick" | "nodeKeyClick")[], "nodeClick" | "bracketsClick" | "menuClick" | "iconClick" | "selectedChange" | "update:selectedValue" | "update:data" | "nodeValueClick" | "nodeKeyClick", {
    data: import("./utils").JSONDataType;
    showLength: boolean;
    showMenu: boolean;
    showDoubleQuotes: boolean;
    showSelectController: boolean;
    showLine: boolean;
    showLineNumber: boolean;
    selectOnClickNode: boolean;
    nodeSelectable: (node: import("./components/TreeNode").NodeDataType) => boolean;
    highlightSelectedNode: boolean;
    showIcon: boolean;
    editable: boolean;
    editableTrigger: "click" | "dblclick";
    deep: number;
    pathCollapsible: (node: import("./components/TreeNode").NodeDataType) => boolean;
    rootPath: string;
    virtual: boolean;
    height: number;
    itemHeight: number;
    selectedValue: string | string[];
    collapsedOnClickBrackets: boolean;
}> & import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps & Plugin;
export default _default;
