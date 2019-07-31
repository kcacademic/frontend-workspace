/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Link_viewer$ref: FragmentReference;
declare export opaque type Link_viewer$fragmentType: Link_viewer$ref;
export type Link_viewer = {|
  +id: ?string,
  +username: string,
  +email: ?string,
  +$refType: Link_viewer$ref,
|};
export type Link_viewer$data = Link_viewer;
export type Link_viewer$key = {
  +$data?: Link_viewer$data,
  +$fragmentRefs: Link_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Link_viewer",
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
(node/*: any*/).hash = '30ec29391551b0aa459b38749c4b42f6';
module.exports = node;
