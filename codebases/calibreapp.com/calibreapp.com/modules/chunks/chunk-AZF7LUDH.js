var e={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"ListMembers"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"teamId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},defaultValue:void 0,directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"team"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"teamId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"__typename"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"slug"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"name"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"organisation"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"__typename"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"slug"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"name"},arguments:[],directives:[],selectionSet:void 0}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"members"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"__typename"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"role"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"state"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"invitationName"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"invitationEmail"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"role"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"uuid"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"lastSeenAt"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"teams"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"slug"},arguments:[],directives:[],selectionSet:void 0}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"uuid"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"name"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"email"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"avatar"},arguments:[],directives:[],selectionSet:void 0}]}}]}}]}}]}}]};var i={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"query",name:{kind:"Name",value:"SearchMembers"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"orgId"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},defaultValue:void 0,directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"cursor"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},defaultValue:void 0,directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"filter"}},type:{kind:"NamedType",name:{kind:"Name",value:"MembershipsFilter"}},defaultValue:void 0,directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"organisation"},arguments:[{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"orgId"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"__typename"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"slug"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"membersList"},arguments:[{kind:"Argument",name:{kind:"Name",value:"filter"},value:{kind:"Variable",name:{kind:"Name",value:"filter"}}},{kind:"Argument",name:{kind:"Name",value:"after"},value:{kind:"Variable",name:{kind:"Name",value:"cursor"}}},{kind:"Argument",name:{kind:"Name",value:"first"},value:{kind:"IntValue",value:"3"}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"__typename"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"totalCount"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"pageInfo"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"hasPreviousPage"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"hasNextPage"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"endCursor"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"startCursor"},arguments:[],directives:[],selectionSet:void 0}]}},{kind:"Field",alias:void 0,name:{kind:"Name",value:"edges"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"node"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"__typename"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"role"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"state"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"invitationName"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"invitationEmail"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"role"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"uuid"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"lastSeenAt"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"uuid"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"name"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"email"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"avatar"},arguments:[],directives:[],selectionSet:void 0}]}}]}}]}}]}}]}}]}}]},n={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateMember"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"organisation"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},defaultValue:void 0,directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"uuid"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},defaultValue:void 0,directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"attributes"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"MemberInput"}}},defaultValue:void 0,directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"updateMember"},arguments:[{kind:"Argument",name:{kind:"Name",value:"organisation"},value:{kind:"Variable",name:{kind:"Name",value:"organisation"}}},{kind:"Argument",name:{kind:"Name",value:"uuid"},value:{kind:"Variable",name:{kind:"Name",value:"uuid"}}},{kind:"Argument",name:{kind:"Name",value:"attributes"},value:{kind:"Variable",name:{kind:"Name",value:"attributes"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"uuid"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"role"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"invitationName"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"__typename"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"name"},arguments:[],directives:[],selectionSet:void 0}]}}]}}]}}]},a={kind:"Document",definitions:[{kind:"OperationDefinition",operation:"mutation",name:{kind:"Name",value:"UpdateMembers"},variableDefinitions:[{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"organisation"}},type:{kind:"NamedType",name:{kind:"Name",value:"String"}},defaultValue:void 0,directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"team"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"String"}}},defaultValue:void 0,directives:[]},{kind:"VariableDefinition",variable:{kind:"Variable",name:{kind:"Name",value:"attributes"}},type:{kind:"NonNullType",type:{kind:"NamedType",name:{kind:"Name",value:"TeamInput"}}},defaultValue:void 0,directives:[]}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"updateTeam"},arguments:[{kind:"Argument",name:{kind:"Name",value:"organisation"},value:{kind:"Variable",name:{kind:"Name",value:"organisation"}}},{kind:"Argument",name:{kind:"Name",value:"slug"},value:{kind:"Variable",name:{kind:"Name",value:"team"}}},{kind:"Argument",name:{kind:"Name",value:"attributes"},value:{kind:"Variable",name:{kind:"Name",value:"attributes"}}}],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"members"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"uuid"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"role"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"user"},arguments:[],directives:[],selectionSet:{kind:"SelectionSet",selections:[{kind:"Field",alias:void 0,name:{kind:"Name",value:"__typename"},arguments:[],directives:[],selectionSet:void 0},{kind:"Field",alias:void 0,name:{kind:"Name",value:"name"},arguments:[],directives:[],selectionSet:void 0}]}}]}}]}}]}}]};export{e as a,i as b,n as c,a as d};
//# sourceMappingURL=chunk-AZF7LUDH.js.map