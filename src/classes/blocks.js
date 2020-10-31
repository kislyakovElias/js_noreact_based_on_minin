import {col, css, row} from "../utils";

class Block {
    constructor(value, options){
        this.value = value
        this. options = options
    }

    toHTMl() {
        throw new Error('Method toHTML must be realized')
    }

}

export class TitleBlock extends Block{
    constructor(value, options) {
        super(value, options);
    }
    toHTMl() {
        const {tag = 'h1', styles} = this.options
        return row(col(`<${tag}> ${this.value}</${tag}>`), css(styles))
    }
}

export class ImageBlock extends Block{
    constructor(value, options) {
        super(value, options);
    }
    toHTMl() {
        const {imageStyles: is, alt = '', styles} = this.options
        return row(`<img src="${this.value}" alt="${alt}" style="${css(is)}"/>`, css(styles))
    }
}

export class ColumnsBlock extends Block{
    constructor(value, options) {
        super(value, options);
    }
    toHTMl() {
        const html = this.value.map(col).join('')
        return row(html, css(this.options.styles))
    }
}

export class TextBlock extends Block{
    constructor(value, options) {
        super(value, options);
    }
    toHTMl() {
        return row(col(`<p> ${this.value}</p>`), css(this.options.styles))
    }
}

