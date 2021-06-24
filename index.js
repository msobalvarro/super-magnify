'use strict'

import html2canvas from "html2canvas"

class Magnify {
    constructor(element) {
        this.element = html2canvas(element)
    }

    getDataValue() {
        return this.element
    }
}

export default Magnify