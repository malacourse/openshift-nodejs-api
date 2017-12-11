# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgRouteApisRouteV1RouteTargetReference

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **String** | The kind of target that the route is referring to. Currently, only &#39;Service&#39; is allowed | 
**name** | **String** | name of the service/target that is being referred to. e.g. name of the service | 
**weight** | **Number** | weight as an integer between 0 and 256, default 1, that specifies the target&#39;s relative weight against other target reference objects. 0 suppresses requests to this backend. | 


