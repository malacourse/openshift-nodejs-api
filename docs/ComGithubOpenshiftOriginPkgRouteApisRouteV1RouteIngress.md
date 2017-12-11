# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgRouteApisRouteV1RouteIngress

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conditions** | [**[ComGithubOpenshiftOriginPkgRouteApisRouteV1RouteIngressCondition]**](ComGithubOpenshiftOriginPkgRouteApisRouteV1RouteIngressCondition.md) | Conditions is the state of the route, may be empty. | [optional] 
**host** | **String** | Host is the host string under which the route is exposed; this value is required | [optional] 
**routerCanonicalHostname** | **String** | CanonicalHostname is the external host name for the router that can be used as a CNAME for the host requested for this route. This value is optional and may not be set in all cases. | [optional] 
**routerName** | **String** | Name is a name chosen by the router to identify itself; this value is required | [optional] 
**wildcardPolicy** | **String** | Wildcard policy is the wildcard policy that was allowed where this route is exposed. | [optional] 


