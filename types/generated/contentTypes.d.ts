import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    scheduledAt: Attribute.DateTime;
    timezone: Attribute.String;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAdyuvantyKleiAdyuvantyKlei extends Schema.CollectionType {
  collectionName: 'adyuvanty_kleis';
  info: {
    singularName: 'adyuvanty-klei';
    pluralName: 'adyuvanty-kleis';
    displayName: '\u0410\u0434\u044C\u044E\u0432\u0430\u043D\u0442\u044B, \u043A\u043B\u0435\u0438';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::adyuvanty-klei.adyuvanty-klei',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::adyuvanty-klei.adyuvanty-klei',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiAgrohimikatyMikroelementyAgrohimikatyMikroelementy
  extends Schema.CollectionType {
  collectionName: 'agrohimikaty_mikroelementies';
  info: {
    singularName: 'agrohimikaty-mikroelementy';
    pluralName: 'agrohimikaty-mikroelementies';
    displayName: '\u0410\u0433\u0440\u043E\u0445\u0438\u043C\u0438\u043A\u0430\u0442\u044B, \u043C\u0438\u043A\u0440\u043E\u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::agrohimikaty-mikroelementy.agrohimikaty-mikroelementy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::agrohimikaty-mikroelementy.agrohimikaty-mikroelementy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBayerPodsolnechnikBayerPodsolnechnik
  extends Schema.CollectionType {
  collectionName: 'bayer_podsolnechniks';
  info: {
    singularName: 'bayer-podsolnechnik';
    pluralName: 'bayer-podsolnechniks';
    displayName: '\u041F\u043E\u0434\u0441\u043E\u043B\u043D\u0435\u0447\u043D\u0438\u043A Bayer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item-seed-sunflower-bayer'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::bayer-podsolnechnik.bayer-podsolnechnik',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::bayer-podsolnechnik.bayer-podsolnechnik',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBiofungiczidyImmunomodulyatoryBiofungiczidyImmunomodulyatory
  extends Schema.CollectionType {
  collectionName: 'biofungiczidy_immunomodulyatories';
  info: {
    singularName: 'biofungiczidy-immunomodulyatory';
    pluralName: 'biofungiczidy-immunomodulyatories';
    displayName: '\u0411\u0438\u043E\u0444\u0443\u043D\u0433\u0438\u0446\u0438\u0434\u044B, \u0438\u043C\u043C\u0443\u043D\u043E\u043C\u043E\u0434\u0443\u043B\u044F\u0442\u043E\u0440\u044B';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::biofungiczidy-immunomodulyatory.biofungiczidy-immunomodulyatory',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::biofungiczidy-immunomodulyatory.biofungiczidy-immunomodulyatory',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiBiopreparatyBiopreparaty extends Schema.CollectionType {
  collectionName: 'biopreparaties';
  info: {
    singularName: 'biopreparaty';
    pluralName: 'biopreparaties';
    displayName: '\u0411\u0438\u043E\u043F\u0440\u0435\u043F\u0430\u0440\u0430\u0442\u044B';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::biopreparaty.biopreparaty',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::biopreparaty.biopreparaty',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiDesikantyDesikanty extends Schema.CollectionType {
  collectionName: 'desikanties';
  info: {
    singularName: 'desikanty';
    pluralName: 'desikanties';
    displayName: '\u0414\u0435\u0441\u0438\u043A\u0430\u043D\u0442\u044B';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::desikanty.desikanty',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::desikanty.desikanty',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFumigantyFumiganty extends Schema.CollectionType {
  collectionName: 'fumiganties';
  info: {
    singularName: 'fumiganty';
    pluralName: 'fumiganties';
    displayName: '\u0424\u0443\u043C\u0438\u0433\u0430\u043D\u0442\u044B';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fumiganty.fumiganty',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fumiganty.fumiganty',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFungiczidnyjProtravitelSemyanFungiczidnyjProtravitelSemyan
  extends Schema.CollectionType {
  collectionName: 'fungiczidnyj_protravitel_semyans';
  info: {
    singularName: 'fungiczidnyj-protravitel-semyan';
    pluralName: 'fungiczidnyj-protravitel-semyans';
    displayName: '\u0424\u0443\u043D\u0433\u0438\u0446\u0438\u0434\u043D\u044B\u0435 \u043F\u0440\u043E\u0442\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u0438 \u0441\u0435\u043C\u044F\u043D';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    component: Attribute.Component<'items.base-item'>;
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fungiczidnyj-protravitel-semyan.fungiczidnyj-protravitel-semyan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fungiczidnyj-protravitel-semyan.fungiczidnyj-protravitel-semyan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFungiczidyFungiczidy extends Schema.CollectionType {
  collectionName: 'fungiczidies';
  info: {
    singularName: 'fungiczidy';
    pluralName: 'fungiczidies';
    displayName: '\u0424\u0443\u043D\u0433\u0438\u0446\u0438\u0434\u044B';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::fungiczidy.fungiczidy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::fungiczidy.fungiczidy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiGerbiczidyGerbiczidy extends Schema.CollectionType {
  collectionName: 'gerbiczidies';
  info: {
    singularName: 'gerbiczidy';
    pluralName: 'gerbiczidies';
    displayName: '\u0413\u0435\u0440\u0431\u0438\u0446\u0438\u0434\u044B';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::gerbiczidy.gerbiczidy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::gerbiczidy.gerbiczidy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInsekticzidnyeProtraviteliSemyanInsekticzidnyeProtraviteliSemyan
  extends Schema.CollectionType {
  collectionName: 'insekticzidnye_protraviteli_semyans';
  info: {
    singularName: 'insekticzidnye-protraviteli-semyan';
    pluralName: 'insekticzidnye-protraviteli-semyans';
    displayName: '\u0418\u043D\u0441\u0435\u043A\u0442\u0438\u0446\u0438\u0434\u043D\u044B\u0435 \u043F\u0440\u043E\u0442\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u0438 \u0441\u0435\u043C\u044F\u043D';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    component: Attribute.Component<'items.base-item'>;
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::insekticzidnye-protraviteli-semyan.insekticzidnye-protraviteli-semyan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::insekticzidnye-protraviteli-semyan.insekticzidnye-protraviteli-semyan',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiInsekticzidyInsekticzidy extends Schema.CollectionType {
  collectionName: 'insekticzidies';
  info: {
    singularName: 'insekticzidy';
    pluralName: 'insekticzidies';
    displayName: '\u0418\u043D\u0441\u0435\u043A\u0442\u0438\u0446\u0438\u0434\u044B';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    component: Attribute.Component<'items.base-item'>;
    name: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::insekticzidy.insekticzidy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::insekticzidy.insekticzidy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiKukuruzaBayerKukuruzaBayer extends Schema.CollectionType {
  collectionName: 'kukuruza_bayers';
  info: {
    singularName: 'kukuruza-bayer';
    pluralName: 'kukuruza-bayers';
    displayName: '\u041A\u0443\u043A\u0443\u0440\u0443\u0437\u0430 Bayer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item-corn'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::kukuruza-bayer.kukuruza-bayer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::kukuruza-bayer.kukuruza-bayer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiKukuruzaLgKukuruzaLg extends Schema.CollectionType {
  collectionName: 'kukuruza_lgs';
  info: {
    singularName: 'kukuruza-lg';
    pluralName: 'kukuruza-lgs';
    displayName: '\u041A\u0443\u043A\u0443\u0440\u0443\u0437\u0430 LG';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item-corn'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::kukuruza-lg.kukuruza-lg',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::kukuruza-lg.kukuruza-lg',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiKukuruzaLideaKukuruzaLidea extends Schema.CollectionType {
  collectionName: 'kukuruza_lideas';
  info: {
    singularName: 'kukuruza-lidea';
    pluralName: 'kukuruza-lideas';
    displayName: '\u041A\u0443\u043A\u0443\u0440\u0443\u0437\u0430 Lidea';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item-seed-corn-lidea'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::kukuruza-lidea.kukuruza-lidea',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::kukuruza-lidea.kukuruza-lidea',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiKukuruzaMaisadourKukuruzaMaisadour
  extends Schema.CollectionType {
  collectionName: 'kukuruza_maisadours';
  info: {
    singularName: 'kukuruza-maisadour';
    pluralName: 'kukuruza-maisadours';
    displayName: '\u041A\u0443\u043A\u0443\u0440\u0443\u0437\u0430 Maisadour';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item-corn'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::kukuruza-maisadour.kukuruza-maisadour',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::kukuruza-maisadour.kukuruza-maisadour',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiKukuruzaSyngentaKukuruzaSyngenta
  extends Schema.CollectionType {
  collectionName: 'kukuruza_syngentas';
  info: {
    singularName: 'kukuruza-syngenta';
    pluralName: 'kukuruza-syngentas';
    displayName: '\u041A\u0443\u043A\u0443\u0440\u0443\u0437\u0430 Syngenta';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item-seed-corn-syngenta'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::kukuruza-syngenta.kukuruza-syngenta',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::kukuruza-syngenta.kukuruza-syngenta',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLgPodsolnechnikLgPodsolnechnik
  extends Schema.CollectionType {
  collectionName: 'lg_podsolnechniks';
  info: {
    singularName: 'lg-podsolnechnik';
    pluralName: 'lg-podsolnechniks';
    displayName: '\u041F\u043E\u0434\u0441\u043E\u043B\u043D\u0435\u0447\u043D\u0438\u043A LG';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item-seed'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lg-podsolnechnik.lg-podsolnechnik',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lg-podsolnechnik.lg-podsolnechnik',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLideaPodsolnechnikLideaPodsolnechnik
  extends Schema.CollectionType {
  collectionName: 'lidea_podsolnechniks';
  info: {
    singularName: 'lidea-podsolnechnik';
    pluralName: 'lidea-podsolnechniks';
    displayName: '\u041F\u043E\u0434\u0441\u043E\u043B\u043D\u0435\u0447\u043D\u0438\u043A Lidea';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item-seed'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::lidea-podsolnechnik.lidea-podsolnechnik',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::lidea-podsolnechnik.lidea-podsolnechnik',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMaisadourPodsolnechnikMaisadourPodsolnechnik
  extends Schema.CollectionType {
  collectionName: 'maisadour_podsolnechniks';
  info: {
    singularName: 'maisadour-podsolnechnik';
    pluralName: 'maisadour-podsolnechniks';
    displayName: '\u041F\u043E\u0434\u0441\u043E\u043B\u043D\u0435\u0447\u043D\u0438\u043A \u041Caisadour';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item-seed-sunflower-maisadour'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::maisadour-podsolnechnik.maisadour-podsolnechnik',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::maisadour-podsolnechnik.maisadour-podsolnechnik',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiMakroudobreniyaMakroudobreniya
  extends Schema.CollectionType {
  collectionName: 'makroudobreniyas';
  info: {
    singularName: 'makroudobreniya';
    pluralName: 'makroudobreniyas';
    displayName: '\u041C\u0430\u043A\u0440\u043E\u0443\u0434\u043E\u0431\u0440\u0435\u043D\u0438\u044F';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::makroudobreniya.makroudobreniya',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::makroudobreniya.makroudobreniya',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRegulyatoryStimulyatoryRostaRegulyatoryStimulyatoryRosta
  extends Schema.CollectionType {
  collectionName: 'regulyatory_stimulyatory_rostas';
  info: {
    singularName: 'regulyatory-stimulyatory-rosta';
    pluralName: 'regulyatory-stimulyatory-rostas';
    displayName: '\u0420\u0435\u0433\u0443\u043B\u044F\u0442\u043E\u0440\u044B, \u0441\u0442\u0438\u043C\u0443\u043B\u044F\u0442\u043E\u0440\u044B \u0440\u043E\u0441\u0442\u0430';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::regulyatory-stimulyatory-rosta.regulyatory-stimulyatory-rosta',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::regulyatory-stimulyatory-rosta.regulyatory-stimulyatory-rosta',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiRodenticzidyRodenticzidy extends Schema.CollectionType {
  collectionName: 'rodenticzidies';
  info: {
    singularName: 'rodenticzidy';
    pluralName: 'rodenticzidies';
    displayName: '\u0420\u043E\u0434\u0435\u043D\u0442\u0438\u0446\u0438\u0434\u044B';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::rodenticzidy.rodenticzidy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::rodenticzidy.rodenticzidy',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSyngentaPodsolnechnikSyngentaPodsolnechnik
  extends Schema.CollectionType {
  collectionName: 'syngenta_podsolnechniks';
  info: {
    singularName: 'syngenta-podsolnechnik';
    pluralName: 'syngenta-podsolnechniks';
    displayName: '\u041F\u043E\u0434\u0441\u043E\u043B\u043D\u0435\u0447\u043D\u0438\u043A Syngenta';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    name: Attribute.String;
    component: Attribute.Component<'items.base-item-seed'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::syngenta-podsolnechnik.syngenta-podsolnechnik',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::syngenta-podsolnechnik.syngenta-podsolnechnik',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::adyuvanty-klei.adyuvanty-klei': ApiAdyuvantyKleiAdyuvantyKlei;
      'api::agrohimikaty-mikroelementy.agrohimikaty-mikroelementy': ApiAgrohimikatyMikroelementyAgrohimikatyMikroelementy;
      'api::bayer-podsolnechnik.bayer-podsolnechnik': ApiBayerPodsolnechnikBayerPodsolnechnik;
      'api::biofungiczidy-immunomodulyatory.biofungiczidy-immunomodulyatory': ApiBiofungiczidyImmunomodulyatoryBiofungiczidyImmunomodulyatory;
      'api::biopreparaty.biopreparaty': ApiBiopreparatyBiopreparaty;
      'api::desikanty.desikanty': ApiDesikantyDesikanty;
      'api::fumiganty.fumiganty': ApiFumigantyFumiganty;
      'api::fungiczidnyj-protravitel-semyan.fungiczidnyj-protravitel-semyan': ApiFungiczidnyjProtravitelSemyanFungiczidnyjProtravitelSemyan;
      'api::fungiczidy.fungiczidy': ApiFungiczidyFungiczidy;
      'api::gerbiczidy.gerbiczidy': ApiGerbiczidyGerbiczidy;
      'api::insekticzidnye-protraviteli-semyan.insekticzidnye-protraviteli-semyan': ApiInsekticzidnyeProtraviteliSemyanInsekticzidnyeProtraviteliSemyan;
      'api::insekticzidy.insekticzidy': ApiInsekticzidyInsekticzidy;
      'api::kukuruza-bayer.kukuruza-bayer': ApiKukuruzaBayerKukuruzaBayer;
      'api::kukuruza-lg.kukuruza-lg': ApiKukuruzaLgKukuruzaLg;
      'api::kukuruza-lidea.kukuruza-lidea': ApiKukuruzaLideaKukuruzaLidea;
      'api::kukuruza-maisadour.kukuruza-maisadour': ApiKukuruzaMaisadourKukuruzaMaisadour;
      'api::kukuruza-syngenta.kukuruza-syngenta': ApiKukuruzaSyngentaKukuruzaSyngenta;
      'api::lg-podsolnechnik.lg-podsolnechnik': ApiLgPodsolnechnikLgPodsolnechnik;
      'api::lidea-podsolnechnik.lidea-podsolnechnik': ApiLideaPodsolnechnikLideaPodsolnechnik;
      'api::maisadour-podsolnechnik.maisadour-podsolnechnik': ApiMaisadourPodsolnechnikMaisadourPodsolnechnik;
      'api::makroudobreniya.makroudobreniya': ApiMakroudobreniyaMakroudobreniya;
      'api::regulyatory-stimulyatory-rosta.regulyatory-stimulyatory-rosta': ApiRegulyatoryStimulyatoryRostaRegulyatoryStimulyatoryRosta;
      'api::rodenticzidy.rodenticzidy': ApiRodenticzidyRodenticzidy;
      'api::syngenta-podsolnechnik.syngenta-podsolnechnik': ApiSyngentaPodsolnechnikSyngentaPodsolnechnik;
    }
  }
}
