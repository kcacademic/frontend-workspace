/**
 * @flow
 * @relayHash b1f8157f6e6f2ea3abfddb6be9195c90
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Link_viewer$ref = any;
export type LinkListPageQueryVariables = {||};
export type LinkListPageQueryResponse = {|
  +users: $ReadOnlyArray<{|
    +$fragmentRefs: Link_viewer$ref
  |}>
|};
export type LinkListPageQuery = {|
  variables: LinkListPageQueryVariables,
  response: LinkListPageQueryResponse,
|};
*/


/*
query LinkListPageQuery {
  users {
    ...Link_viewer
    id
  }
}

fragment Link_viewer on User {
  id
  username
  email
}
*/

const node/*: ConcreteRequest*/ = {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "LinkListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "Link_viewer",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "LinkListPageQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "users",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "username",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "email",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "LinkListPageQuery",
    "id": null,
    "text": "query LinkListPageQuery {\n  users {\n    ...Link_viewer\n    id\n  }\n}\n\nfragment Link_viewer on User {\n  id\n  username\n  email\n}\n",
    "metadata": {}
  }
};
// prettier-ignore
(node/*: any*/).hash = '7f720f4a98f7edf3d0c8044281808d83';
module.exports = node;
