import _get from 'lodash/get'

export interface stringToStringObj {
    [key: string]: string
}

export const texts: stringToStringObj = {
    'no.sigurof.tab.text.c-dur': 'C-dur',
    'no.sigurof.tab.text.d-dur': 'D-dur',
    'no.sigurof.tab.text.e-dur': 'E-dur',
    'no.sigurof.tab.text.f-dur': 'F-dur',
    'no.sigurof.tab.text.g-dur': 'G-dur',
    'no.sigurof.tab.text.a-dur': 'A-dur',
    'no.sigurof.tab.text.h-dur': 'H-dur',

    'no.sigurof.tab.pane.text.c-dur': 'This means C-major',
    'no.sigurof.tab.pane.text.d-dur': 'Means D-major',
    'no.sigurof.tab.pane.text.e-dur': 'E-dur is not E minor',
    'no.sigurof.tab.pane.text.f-dur': 'Is a musical scale',
    'no.sigurof.tab.pane.text.g-dur': 'Is playable on the piano',
    'no.sigurof.tab.pane.text.a-dur': 'What more is there to say',
    'no.sigurof.tab.pane.text.h-dur': 'Do you understand what dur means now?',
}

export function getTextGlobal(key: string): string {
    return _get(texts, key)
}

export function getText(texts: stringToStringObj, key: string): string | null {
    return _get(texts, key)
}

export class TextGetter {
    private readonly textStore: stringToStringObj | undefined
    private readonly fallback: string | undefined

    constructor(textStore: stringToStringObj, fallback?: string) {
        this.textStore = textStore
        this.fallback = fallback
    }

    get(key: string): string  {
        const fb = this.fallback === undefined ? '' : this.fallback
        return this.withFallback(key, fb)
    }

    withFallback(key: string, fallback: string): string {
        const candidateText: string | undefined = _get(this.textStore, key)
        return candidateText !== undefined ? candidateText : fallback
    }
}
