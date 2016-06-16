class EmptyDirective {
    /**
     * Initialize directive when parse node
     * in parse stage can access directive expression and only this node (no parents, no childs)
     *
     * @param expression {String} expression from special property of this node
     * @param ctxNode {CombineNode} node where directive has been instancing
     */
    constructor(expression, ctxNode) {
        this._value = expression;
        this._node  = ctxNode;
    }

    /**
     * You can declare static method for call of another directive
     */
    static findNodeByCondition() {

    }

    /**
     * This method call when walk, after children nodes
     * in this stage can access all node API
     */
    run() {

    }

    /**
     * This method call when walk, before children nodes
     * in this stage can access all node API
     */
    pitch() {

    }

    /**
     * You can declare public method for call of another directive
     */
    publicMethod() {

    }

    /**
     * If need you can declare private method
     * @private
     */
    _privateMethod() {

    }
}

/**
 * If needle you can declare directive const
 *
 * @type {string}
 */
EmptyDirective.CONST = 'Const expr';

