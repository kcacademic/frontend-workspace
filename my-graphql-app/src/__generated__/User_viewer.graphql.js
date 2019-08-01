/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type User_viewer$ref: FragmentReference;
declare export opaque type User_viewer$fragmentType: User_viewer$ref;
export type User_viewer = {|
  +id: ?string,
  +username: string,
  +email: ?string,
  +$refType: User_viewer$ref,
|};
export type User_viewer$data = User_viewer;
export type User_viewer$key = {
  +$data?: User_viewer$data,
  +$fragmentRefs: User_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "User_viewer",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
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
};
// prettier-ignore
(node/*: any*/).hash = '88813d0e7ff80cd1d4d8762501a2388e';
module.exports = node;
