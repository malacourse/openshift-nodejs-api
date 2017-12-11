# OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgRouteApisRouteV1RouteSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternateBackends** | [**[ComGithubOpenshiftOriginPkgRouteApisRouteV1RouteTargetReference]**](ComGithubOpenshiftOriginPkgRouteApisRouteV1RouteTargetReference.md) | alternateBackends allows up to 3 additional backends to be assigned to the route. Only the Service kind is allowed, and it will be defaulted to Service. Use the weight field in RouteTargetReference object to specify relative preference. | [optional] 
**host** | **String** | host is an alias/DNS that points to the service. Optional. If not specified a route name will typically be automatically chosen. Must follow DNS952 subdomain conventions. | 
**path** | **String** | Path that the router watches for, to route traffic for to the service. Optional | [optional] 
**port** | [**ComGithubOpenshiftOriginPkgRouteApisRouteV1RoutePort**](ComGithubOpenshiftOriginPkgRouteApisRouteV1RoutePort.md) | If specified, the port to be used by the router. Most routers will use all endpoints exposed by the service by default - set this value to instruct routers which port to use. | [optional] 
**tls** | [**ComGithubOpenshiftOriginPkgRouteApisRouteV1TLSConfig**](ComGithubOpenshiftOriginPkgRouteApisRouteV1TLSConfig.md) | The tls field provides the ability to configure certificates and termination for the route. | [optional] 
**to** | [**ComGithubOpenshiftOriginPkgRouteApisRouteV1RouteTargetReference**](ComGithubOpenshiftOriginPkgRouteApisRouteV1RouteTargetReference.md) | to is an object the route should use as the primary backend. Only the Service kind is allowed, and it will be defaulted to Service. If the weight field (0-256 default 1) is set to zero, no traffic will be sent to this backend. | 
**wildcardPolicy** | **String** | Wildcard policy if any for the route. Currently only &#39;Subdomain&#39; or &#39;None&#39; is allowed. | [optional] 


