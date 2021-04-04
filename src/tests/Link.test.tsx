import React from 'react';
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Link from '../components/Link';

describe('Link component testing', () => {
    let container: Element | DocumentFragment | null = null;
    container = document.createElement("div");
    document.body.appendChild(container);

    it('Linkコンポーネントテスト', () => {
        // ケース別にテストします
        act(() => {
            render(<Link />, container);
        });
        // propsが渡されない場合
        expect(container!.textContent).toBe('No contents');

        act(() => {
            render(<Link text='this link'/>, container);
        });
        // propsが渡された場合
        expect(container!.textContent).toBe('this link');
    });
})