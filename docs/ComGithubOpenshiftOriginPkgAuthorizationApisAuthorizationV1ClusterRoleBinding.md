# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgAuthorizationApisAuthorizationV1ClusterRoleBinding

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiVersion** | **String** | APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources | [optional] 
**groupNames** | **[String]** | GroupNames holds all the groups directly bound to the role. This field should only be specified when supporting legacy clients and servers. See Subjects for further details. | 
**kind** | **String** | Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds | [optional] 
**metadata** | [**IoK8sApimachineryPkgApisMetaV1ObjectMeta**](IoK8sApimachineryPkgApisMetaV1ObjectMeta.md) | Standard object&#39;s metadata. | [optional] 
**roleRef** | [**IoK8sKubernetesPkgApiV1ObjectReference**](IoK8sKubernetesPkgApiV1ObjectReference.md) | RoleRef can only reference the current namespace and the global namespace. If the ClusterRoleRef cannot be resolved, the Authorizer must return an error. Since Policy is a singleton, this is sufficient knowledge to locate a role. | 
**subjects** | [**[IoK8sKubernetesPkgApiV1ObjectReference]**](IoK8sKubernetesPkgApiV1ObjectReference.md) | Subjects hold object references to authorize with this rule. This field is ignored if UserNames or GroupNames are specified to support legacy clients and servers. Thus newer clients that do not need to support backwards compatibility should send only fully qualified Subjects and should omit the UserNames and GroupNames fields. Clients that need to support backwards compatibility can use this field to build the UserNames and GroupNames. | 
**userNames** | **[String]** | UserNames holds all the usernames directly bound to the role. This field should only be specified when supporting legacy clients and servers. See Subjects for further details. | 


