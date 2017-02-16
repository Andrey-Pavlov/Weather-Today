import { OpaqueToken } from '@angular/core';
import * as config from '../../app.config.json';
import {AppConfig} from './core/interfaces/config/app-config.interface';

export const APP_CONFIG_VALUE: AppConfig = config;

export let APP_CONFIG = new OpaqueToken('app.config');
