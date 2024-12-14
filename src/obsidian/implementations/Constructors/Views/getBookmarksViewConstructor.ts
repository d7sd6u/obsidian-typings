import type {
    App} from 'obsidian';
import { ViewType } from '../../Constants/ViewType.ts';
import { getViewConstructorByViewType } from './getViewConstructorByViewType.ts';
import type { BookmarksViewConstructor } from '../../../internals/Constructors/Views/BookmarksViewConstructor.js';

/**
 * Get the BookmarksView constructor.
 *
 * @returns The BookmarksView constructor.
 * @public
 */
export function getBookmarksViewConstructor(app: App): BookmarksViewConstructor {
    return getViewConstructorByViewType(app, ViewType.Bookmarks) as BookmarksViewConstructor;
}
