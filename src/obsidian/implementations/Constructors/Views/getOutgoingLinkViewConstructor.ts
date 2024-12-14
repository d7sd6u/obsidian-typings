import type { App } from 'obsidian';
import type { OutgoingLinkView } from '../../../internals/InternalPlugins/OutgoingLink/OutgoingLinkView.js';
import { ViewType } from '../../Constants/ViewType.ts';
import { getViewConstructorByViewType } from './getViewConstructorByViewType.ts';
import type { TypedViewConstructor } from '../../../internals/Constructors/Views/TypedViewConstructor.ts';

/**
 * Get the OutgoingLinkView constructor.
 *
 * @returns The OutgoingLinkView constructor.
 * @public
 */
export function getOutgoingLinkViewConstructor(app: App): TypedViewConstructor<OutgoingLinkView> {
    return getViewConstructorByViewType(app, ViewType.OutgoingLink) as TypedViewConstructor<OutgoingLinkView>;
}
