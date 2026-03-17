/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import type sql from 'node:sqlite';
import { ISqliteService } from '../common/sqliteService';

export class SqliteService implements ISqliteService {
	declare readonly _serviceBrand: undefined;

	createDatabase(path: string, options?: sql.DatabaseSyncOptions): sql.DatabaseSync {
		const sqliteModule: typeof import('node:sqlite') = require('node:sqlite');
		return new sqliteModule.DatabaseSync(path, options);
	}
}
