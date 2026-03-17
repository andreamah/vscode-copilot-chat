/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import type sql from 'node:sqlite';
import { createServiceIdentifier } from '../../../util/common/services';

export const ISqliteService = createServiceIdentifier<ISqliteService>('ISqliteService');

export interface ISqliteService {
	readonly _serviceBrand: undefined;

	/**
	 * Creates a new {@link sql.DatabaseSync} instance. The `node:sqlite` module
	 * is loaded lazily on first call to avoid eagerly initializing the native
	 * module at bundle-load time, which can trigger V8 inspector crashes during
	 * debugging (SIGSEGV in `v8::Context::Enter`).
	 */
	createDatabase(path: string, options?: sql.DatabaseSyncOptions): sql.DatabaseSync;
}
