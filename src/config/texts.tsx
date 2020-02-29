import _get from 'lodash/get'

interface stringToString {
    [key: string]: string
}

export const texts: object = {
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

export function getText(key: string): string {
    return _get(texts, key)
}
