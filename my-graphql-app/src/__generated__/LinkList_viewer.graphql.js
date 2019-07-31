/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type LinkList_viewer$ref: FragmentReference;
declare export opaque type LinkList_viewer$fragmentType: LinkList_viewer$ref;
export type LinkList_viewer = $ReadOnlyArray<{|
  +id: ?string,
  +username: string,
  +email: ?string,
  +$refType: LinkList_viewer$ref,
|}>;
export type LinkList_viewer$data = LinkList_viewer;
export type LinkList_viewer$key = {
  +$data?: LinkList_viewer$data,
  +$fragmentRefs: LinkList_viewer$ref,
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "LinkList_viewer",
  "type": "User",
  "metadata": {
    "plural": true
  },
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
(node/*: any*/).hash = 'f5fed2f298ebbb0402840625186dc599';
module.exports = node;
