# OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAppsOpenshiftIoV1DeploymentConfigForAllNamespaces**](AppsOpenshiftIoV1Api.md#createAppsOpenshiftIoV1DeploymentConfigForAllNamespaces) | **POST** /apis/apps.openshift.io/v1/deploymentconfigs | 
[**createAppsOpenshiftIoV1NamespacedDeploymentConfig**](AppsOpenshiftIoV1Api.md#createAppsOpenshiftIoV1NamespacedDeploymentConfig) | **POST** /apis/apps.openshift.io/v1/namespaces/{namespace}/deploymentconfigs | 
[**createAppsOpenshiftIoV1NamespacedDeploymentConfigRollbackRollback**](AppsOpenshiftIoV1Api.md#createAppsOpenshiftIoV1NamespacedDeploymentConfigRollbackRollback) | **POST** /apis/apps.openshift.io/v1/namespaces/{namespace}/deploymentconfigs/{name}/rollback | 
[**createAppsOpenshiftIoV1NamespacedDeploymentRequestInstantiate**](AppsOpenshiftIoV1Api.md#createAppsOpenshiftIoV1NamespacedDeploymentRequestInstantiate) | **POST** /apis/apps.openshift.io/v1/namespaces/{namespace}/deploymentconfigs/{name}/instantiate | 
[**deleteAppsOpenshiftIoV1CollectionNamespacedDeploymentConfig**](AppsOpenshiftIoV1Api.md#deleteAppsOpenshiftIoV1CollectionNamespacedDeploymentConfig) | **DELETE** /apis/apps.openshift.io/v1/namespaces/{namespace}/deploymentconfigs | 
[**deleteAppsOpenshiftIoV1NamespacedDeploymentConfig**](AppsOpenshiftIoV1Api.md#deleteAppsOpenshiftIoV1NamespacedDeploymentConfig) | **DELETE** /apis/apps.openshift.io/v1/namespaces/{namespace}/deploymentconfigs/{name} | 
[**getAppsOpenshiftIoV1APIResources**](AppsOpenshiftIoV1Api.md#getAppsOpenshiftIoV1APIResources) | **GET** /apis/apps.openshift.io/v1/ | 
[**listAppsOpenshiftIoV1DeploymentConfigForAllNamespaces**](AppsOpenshiftIoV1Api.md#listAppsOpenshiftIoV1DeploymentConfigForAllNamespaces) | **GET** /apis/apps.openshift.io/v1/deploymentconfigs | 
[**listAppsOpenshiftIoV1NamespacedDeploymentConfig**](AppsOpenshiftIoV1Api.md#listAppsOpenshiftIoV1NamespacedDeploymentConfig) | **GET** /apis/apps.openshift.io/v1/namespaces/{namespace}/deploymentconfigs | 
[**patchAppsOpenshiftIoV1NamespacedDeploymentConfig**](AppsOpenshiftIoV1Api.md#patchAppsOpenshiftIoV1NamespacedDeploymentConfig) | **PATCH** /apis/apps.openshift.io/v1/namespaces/{namespace}/deploymentconfigs/{name} | 
[**patchAppsOpenshiftIoV1NamespacedDeploymentConfigStatus**](AppsOpenshiftIoV1Api.md#patchAppsOpenshiftIoV1NamespacedDeploymentConfigStatus) | **PATCH** /apis/apps.openshift.io/v1/namespaces/{namespace}/deploymentconfigs/{name}/status | 
[**patchAppsOpenshiftIoV1NamespacedScaleScale**](AppsOpenshiftIoV1Api.md#patchAppsOpenshiftIoV1NamespacedScaleScale) | **PATCH** /apis/apps.openshift.io/v1/namespaces/{namespace}/deploymentconfigs/{name}/scale | 
[**readAppsOpenshiftIoV1NamespacedDeploymentConfig**](AppsOpenshiftIoV1Api.md#readAppsOpenshiftIoV1NamespacedDeploymentConfig) | **GET** /apis/apps.openshift.io/v1/namespaces/{namespace}/deploymentconfigs/{name} | 
[**readAppsOpenshiftIoV1NamespacedDeploymentConfigStatus**](AppsOpenshiftIoV1Api.md#readAppsOpenshiftIoV1NamespacedDeploymentConfigStatus) | **GET** /apis/apps.openshift.io/v1/namespaces/{namespace}/deploymentconfigs/{name}/status | 
[**readAppsOpenshiftIoV1NamespacedDeploymentLogLog**](AppsOpenshiftIoV1Api.md#readAppsOpenshiftIoV1NamespacedDeploymentLogLog) | **GET** /apis/apps.openshift.io/v1/namespaces/{namespace}/deploymentconfigs/{name}/log | 
[**readAppsOpenshiftIoV1NamespacedScaleScale**](AppsOpenshiftIoV1Api.md#readAppsOpenshiftIoV1NamespacedScaleScale) | **GET** /apis/apps.openshift.io/v1/namespaces/{namespace}/deploymentconfigs/{name}/scale | 
[**replaceAppsOpenshiftIoV1NamespacedDeploymentConfig**](AppsOpenshiftIoV1Api.md#replaceAppsOpenshiftIoV1NamespacedDeploymentConfig) | **PUT** /apis/apps.openshift.io/v1/namespaces/{namespace}/deploymentconfigs/{name} | 
[**replaceAppsOpenshiftIoV1NamespacedDeploymentConfigStatus**](AppsOpenshiftIoV1Api.md#replaceAppsOpenshiftIoV1NamespacedDeploymentConfigStatus) | **PUT** /apis/apps.openshift.io/v1/namespaces/{namespace}/deploymentconfigs/{name}/status | 
[**replaceAppsOpenshiftIoV1NamespacedScaleScale**](AppsOpenshiftIoV1Api.md#replaceAppsOpenshiftIoV1NamespacedScaleScale) | **PUT** /apis/apps.openshift.io/v1/namespaces/{namespace}/deploymentconfigs/{name}/scale | 
[**watchAppsOpenshiftIoV1DeploymentConfigListForAllNamespaces**](AppsOpenshiftIoV1Api.md#watchAppsOpenshiftIoV1DeploymentConfigListForAllNamespaces) | **GET** /apis/apps.openshift.io/v1/watch/deploymentconfigs | 
[**watchAppsOpenshiftIoV1NamespacedDeploymentConfig**](AppsOpenshiftIoV1Api.md#watchAppsOpenshiftIoV1NamespacedDeploymentConfig) | **GET** /apis/apps.openshift.io/v1/watch/namespaces/{namespace}/deploymentconfigs/{name} | 
[**watchAppsOpenshiftIoV1NamespacedDeploymentConfigList**](AppsOpenshiftIoV1Api.md#watchAppsOpenshiftIoV1NamespacedDeploymentConfigList) | **GET** /apis/apps.openshift.io/v1/watch/namespaces/{namespace}/deploymentconfigs | 


<a name="createAppsOpenshiftIoV1DeploymentConfigForAllNamespaces"></a>
# **createAppsOpenshiftIoV1DeploymentConfigForAllNamespaces**
> ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig createAppsOpenshiftIoV1DeploymentConfigForAllNamespaces(body, opts)



create a DeploymentConfig

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig(); // ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createAppsOpenshiftIoV1DeploymentConfigForAllNamespaces(body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="createAppsOpenshiftIoV1NamespacedDeploymentConfig"></a>
# **createAppsOpenshiftIoV1NamespacedDeploymentConfig**
> ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig createAppsOpenshiftIoV1NamespacedDeploymentConfig(namespacebody, opts)



create a DeploymentConfig

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig(); // ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig | 

let opts = { 
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
};

apiInstance.createAppsOpenshiftIoV1NamespacedDeploymentConfig(namespacebody, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="createAppsOpenshiftIoV1NamespacedDeploymentConfigRollbackRollback"></a>
# **createAppsOpenshiftIoV1NamespacedDeploymentConfigRollbackRollback**
> ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfigRollback createAppsOpenshiftIoV1NamespacedDeploymentConfigRollbackRollback(name, namespace, body, opts)



create rollback of a DeploymentConfigRollback

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let name = "name_example"; // String | name of the DeploymentConfigRollback

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfigRollback(); // ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfigRollback | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createAppsOpenshiftIoV1NamespacedDeploymentConfigRollbackRollback(name, namespace, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the DeploymentConfigRollback | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfigRollback**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfigRollback.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfigRollback**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfigRollback.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="createAppsOpenshiftIoV1NamespacedDeploymentRequestInstantiate"></a>
# **createAppsOpenshiftIoV1NamespacedDeploymentRequestInstantiate**
> ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentRequest createAppsOpenshiftIoV1NamespacedDeploymentRequestInstantiate(name, namespace, body, opts)



create instantiate of a DeploymentRequest

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let name = "name_example"; // String | name of the DeploymentRequest

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentRequest(); // ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentRequest | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createAppsOpenshiftIoV1NamespacedDeploymentRequestInstantiate(name, namespace, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the DeploymentRequest | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentRequest**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentRequest.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentRequest**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentRequest.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="deleteAppsOpenshiftIoV1CollectionNamespacedDeploymentConfig"></a>
# **deleteAppsOpenshiftIoV1CollectionNamespacedDeploymentConfig**
> IoK8sApimachineryPkgApisMetaV1Status deleteAppsOpenshiftIoV1CollectionNamespacedDeploymentConfig(namespace, opts)



delete collection of DeploymentConfig

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let opts = { 
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.deleteAppsOpenshiftIoV1CollectionNamespacedDeploymentConfig(namespace, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **fieldSelector** | **String**| A selector to restrict the list of returned objects by their fields. Defaults to everything. | [optional] 
 **labelSelector** | **String**| A selector to restrict the list of returned objects by their labels. Defaults to everything. | [optional] 
 **resourceVersion** | **String**| When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. | [optional] 
 **timeoutSeconds** | **Number**| Timeout for the list/watch call. | [optional] 
 **watch** | **Boolean**| Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | [optional] 

### Return type

[**IoK8sApimachineryPkgApisMetaV1Status**](IoK8sApimachineryPkgApisMetaV1Status.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="deleteAppsOpenshiftIoV1NamespacedDeploymentConfig"></a>
# **deleteAppsOpenshiftIoV1NamespacedDeploymentConfig**
> IoK8sApimachineryPkgApisMetaV1Status deleteAppsOpenshiftIoV1NamespacedDeploymentConfig(name, namespace, body, opts)



delete a DeploymentConfig

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let name = "name_example"; // String | name of the DeploymentConfig

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.IoK8sApimachineryPkgApisMetaV1DeleteOptions(); // IoK8sApimachineryPkgApisMetaV1DeleteOptions | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
  'gracePeriodSeconds': 56, // Number | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
  'orphanDependents': true, // Boolean | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
  'propagationPolicy': "propagationPolicy_example" // String | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy.
};

apiInstance.deleteAppsOpenshiftIoV1NamespacedDeploymentConfig(name, namespace, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the DeploymentConfig | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**IoK8sApimachineryPkgApisMetaV1DeleteOptions**](IoK8sApimachineryPkgApisMetaV1DeleteOptions.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **gracePeriodSeconds** | **Number**| The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately. | [optional] 
 **orphanDependents** | **Boolean**| Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \&quot;orphan\&quot; finalizer will be added to/removed from the object&#39;s finalizers list. Either this field or PropagationPolicy may be set, but not both. | [optional] 
 **propagationPolicy** | **String**| Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. | [optional] 

### Return type

[**IoK8sApimachineryPkgApisMetaV1Status**](IoK8sApimachineryPkgApisMetaV1Status.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="getAppsOpenshiftIoV1APIResources"></a>
# **getAppsOpenshiftIoV1APIResources**
> IoK8sApimachineryPkgApisMetaV1APIResourceList getAppsOpenshiftIoV1APIResources()



get available resources

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

apiInstance.getAppsOpenshiftIoV1APIResources((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**IoK8sApimachineryPkgApisMetaV1APIResourceList**](IoK8sApimachineryPkgApisMetaV1APIResourceList.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: application/json, application/yaml, application/vnd.kubernetes.protobuf
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="listAppsOpenshiftIoV1DeploymentConfigForAllNamespaces"></a>
# **listAppsOpenshiftIoV1DeploymentConfigForAllNamespaces**
> ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfigList listAppsOpenshiftIoV1DeploymentConfigForAllNamespaces(opts)



list or watch objects of kind DeploymentConfig

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.listAppsOpenshiftIoV1DeploymentConfigForAllNamespaces(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **fieldSelector** | **String**| A selector to restrict the list of returned objects by their fields. Defaults to everything. | [optional] 
 **labelSelector** | **String**| A selector to restrict the list of returned objects by their labels. Defaults to everything. | [optional] 
 **resourceVersion** | **String**| When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. | [optional] 
 **timeoutSeconds** | **Number**| Timeout for the list/watch call. | [optional] 
 **watch** | **Boolean**| Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfigList**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfigList.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch

<a name="listAppsOpenshiftIoV1NamespacedDeploymentConfig"></a>
# **listAppsOpenshiftIoV1NamespacedDeploymentConfig**
> ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfigList listAppsOpenshiftIoV1NamespacedDeploymentConfig(namespace, opts)



list or watch objects of kind DeploymentConfig

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let opts = { 
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.listAppsOpenshiftIoV1NamespacedDeploymentConfig(namespace, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **fieldSelector** | **String**| A selector to restrict the list of returned objects by their fields. Defaults to everything. | [optional] 
 **labelSelector** | **String**| A selector to restrict the list of returned objects by their labels. Defaults to everything. | [optional] 
 **resourceVersion** | **String**| When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. | [optional] 
 **timeoutSeconds** | **Number**| Timeout for the list/watch call. | [optional] 
 **watch** | **Boolean**| Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfigList**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfigList.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch

<a name="patchAppsOpenshiftIoV1NamespacedDeploymentConfig"></a>
# **patchAppsOpenshiftIoV1NamespacedDeploymentConfig**
> ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig patchAppsOpenshiftIoV1NamespacedDeploymentConfig(name, namespace, body, opts)



partially update the specified DeploymentConfig

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let name = "name_example"; // String | name of the DeploymentConfig

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.IoK8sApimachineryPkgApisMetaV1Patch(); // IoK8sApimachineryPkgApisMetaV1Patch | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.patchAppsOpenshiftIoV1NamespacedDeploymentConfig(name, namespace, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the DeploymentConfig | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**IoK8sApimachineryPkgApisMetaV1Patch**](IoK8sApimachineryPkgApisMetaV1Patch.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="patchAppsOpenshiftIoV1NamespacedDeploymentConfigStatus"></a>
# **patchAppsOpenshiftIoV1NamespacedDeploymentConfigStatus**
> ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig patchAppsOpenshiftIoV1NamespacedDeploymentConfigStatus(name, namespace, body, opts)



partially update status of the specified DeploymentConfig

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let name = "name_example"; // String | name of the DeploymentConfig

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.IoK8sApimachineryPkgApisMetaV1Patch(); // IoK8sApimachineryPkgApisMetaV1Patch | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.patchAppsOpenshiftIoV1NamespacedDeploymentConfigStatus(name, namespace, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the DeploymentConfig | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**IoK8sApimachineryPkgApisMetaV1Patch**](IoK8sApimachineryPkgApisMetaV1Patch.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="patchAppsOpenshiftIoV1NamespacedScaleScale"></a>
# **patchAppsOpenshiftIoV1NamespacedScaleScale**
> IoK8sKubernetesPkgApisExtensionsV1beta1Scale patchAppsOpenshiftIoV1NamespacedScaleScale(name, namespace, body, opts)



partially update scale of the specified Scale

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let name = "name_example"; // String | name of the Scale

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.IoK8sApimachineryPkgApisMetaV1Patch(); // IoK8sApimachineryPkgApisMetaV1Patch | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.patchAppsOpenshiftIoV1NamespacedScaleScale(name, namespace, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the Scale | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**IoK8sApimachineryPkgApisMetaV1Patch**](IoK8sApimachineryPkgApisMetaV1Patch.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**IoK8sKubernetesPkgApisExtensionsV1beta1Scale**](IoK8sKubernetesPkgApisExtensionsV1beta1Scale.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="readAppsOpenshiftIoV1NamespacedDeploymentConfig"></a>
# **readAppsOpenshiftIoV1NamespacedDeploymentConfig**
> ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig readAppsOpenshiftIoV1NamespacedDeploymentConfig(name, namespace, , opts)



read the specified DeploymentConfig

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let name = "name_example"; // String | name of the DeploymentConfig

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
  'exact': true, // Boolean | Should the export be exact.  Exact export maintains cluster-specific fields like 'Namespace'.
  '_export': true // Boolean | Should this value be exported.  Export strips fields that a user can not specify.
};

apiInstance.readAppsOpenshiftIoV1NamespacedDeploymentConfig(name, namespace, , opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the DeploymentConfig | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **exact** | **Boolean**| Should the export be exact.  Exact export maintains cluster-specific fields like &#39;Namespace&#39;. | [optional] 
 **_export** | **Boolean**| Should this value be exported.  Export strips fields that a user can not specify. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="readAppsOpenshiftIoV1NamespacedDeploymentConfigStatus"></a>
# **readAppsOpenshiftIoV1NamespacedDeploymentConfigStatus**
> ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig readAppsOpenshiftIoV1NamespacedDeploymentConfigStatus(name, namespace, , opts)



read status of the specified DeploymentConfig

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let name = "name_example"; // String | name of the DeploymentConfig

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.readAppsOpenshiftIoV1NamespacedDeploymentConfigStatus(name, namespace, , opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the DeploymentConfig | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="readAppsOpenshiftIoV1NamespacedDeploymentLogLog"></a>
# **readAppsOpenshiftIoV1NamespacedDeploymentLogLog**
> ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentLog readAppsOpenshiftIoV1NamespacedDeploymentLogLog(name, namespace, opts)



read log of the specified DeploymentLog

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let name = "name_example"; // String | name of the DeploymentLog

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let opts = { 
  'container': "container_example", // String | The container for which to stream logs. Defaults to only container if there is one container in the pod.
  'follow': true, // Boolean | Follow if true indicates that the build log should be streamed until the build terminates.
  'limitBytes': 56, // Number | If set, the number of bytes to read from the server before terminating the log output. This may not display a complete final line of logging, and may return slightly more or slightly less than the specified limit.
  'nowait': true, // Boolean | NoWait if true causes the call to return immediately even if the deployment is not available yet. Otherwise the server will wait until the deployment has started.
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'previous': true, // Boolean | Return previous deployment logs. Defaults to false.
  'sinceSeconds': 56, // Number | A relative time in seconds before the current time from which to show logs. If this value precedes the time a pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will be returned. Only one of sinceSeconds or sinceTime may be specified.
  'tailLines': 56, // Number | If set, the number of lines from the end of the logs to show. If not specified, logs are shown from the creation of the container or sinceSeconds or sinceTime
  'timestamps': true, // Boolean | If true, add an RFC3339 or RFC3339Nano timestamp at the beginning of every line of log output. Defaults to false.
  'version': 56 // Number | Version of the deployment for which to view logs.
};

apiInstance.readAppsOpenshiftIoV1NamespacedDeploymentLogLog(name, namespace, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the DeploymentLog | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **container** | **String**| The container for which to stream logs. Defaults to only container if there is one container in the pod. | [optional] 
 **follow** | **Boolean**| Follow if true indicates that the build log should be streamed until the build terminates. | [optional] 
 **limitBytes** | **Number**| If set, the number of bytes to read from the server before terminating the log output. This may not display a complete final line of logging, and may return slightly more or slightly less than the specified limit. | [optional] 
 **nowait** | **Boolean**| NoWait if true causes the call to return immediately even if the deployment is not available yet. Otherwise the server will wait until the deployment has started. | [optional] 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **previous** | **Boolean**| Return previous deployment logs. Defaults to false. | [optional] 
 **sinceSeconds** | **Number**| A relative time in seconds before the current time from which to show logs. If this value precedes the time a pod was started, only logs since the pod start will be returned. If this value is in the future, no logs will be returned. Only one of sinceSeconds or sinceTime may be specified. | [optional] 
 **tailLines** | **Number**| If set, the number of lines from the end of the logs to show. If not specified, logs are shown from the creation of the container or sinceSeconds or sinceTime | [optional] 
 **timestamps** | **Boolean**| If true, add an RFC3339 or RFC3339Nano timestamp at the beginning of every line of log output. Defaults to false. | [optional] 
 **version** | **Number**| Version of the deployment for which to view logs. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentLog**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentLog.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="readAppsOpenshiftIoV1NamespacedScaleScale"></a>
# **readAppsOpenshiftIoV1NamespacedScaleScale**
> IoK8sKubernetesPkgApisExtensionsV1beta1Scale readAppsOpenshiftIoV1NamespacedScaleScale(name, namespace, , opts)



read scale of the specified Scale

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let name = "name_example"; // String | name of the Scale

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.readAppsOpenshiftIoV1NamespacedScaleScale(name, namespace, , opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the Scale | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**IoK8sKubernetesPkgApisExtensionsV1beta1Scale**](IoK8sKubernetesPkgApisExtensionsV1beta1Scale.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replaceAppsOpenshiftIoV1NamespacedDeploymentConfig"></a>
# **replaceAppsOpenshiftIoV1NamespacedDeploymentConfig**
> ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig replaceAppsOpenshiftIoV1NamespacedDeploymentConfig(name, namespace, body, opts)



replace the specified DeploymentConfig

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let name = "name_example"; // String | name of the DeploymentConfig

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig(); // ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.replaceAppsOpenshiftIoV1NamespacedDeploymentConfig(name, namespace, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the DeploymentConfig | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replaceAppsOpenshiftIoV1NamespacedDeploymentConfigStatus"></a>
# **replaceAppsOpenshiftIoV1NamespacedDeploymentConfigStatus**
> ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig replaceAppsOpenshiftIoV1NamespacedDeploymentConfigStatus(name, namespace, body, opts)



replace status of the specified DeploymentConfig

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let name = "name_example"; // String | name of the DeploymentConfig

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig(); // ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.replaceAppsOpenshiftIoV1NamespacedDeploymentConfigStatus(name, namespace, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the DeploymentConfig | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig**](ComGithubOpenshiftOriginPkgDeployApisAppsV1DeploymentConfig.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replaceAppsOpenshiftIoV1NamespacedScaleScale"></a>
# **replaceAppsOpenshiftIoV1NamespacedScaleScale**
> IoK8sKubernetesPkgApisExtensionsV1beta1Scale replaceAppsOpenshiftIoV1NamespacedScaleScale(name, namespace, body, opts)



replace scale of the specified Scale

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let name = "name_example"; // String | name of the Scale

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.IoK8sKubernetesPkgApisExtensionsV1beta1Scale(); // IoK8sKubernetesPkgApisExtensionsV1beta1Scale | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.replaceAppsOpenshiftIoV1NamespacedScaleScale(name, namespace, body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the Scale | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**IoK8sKubernetesPkgApisExtensionsV1beta1Scale**](IoK8sKubernetesPkgApisExtensionsV1beta1Scale.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**IoK8sKubernetesPkgApisExtensionsV1beta1Scale**](IoK8sKubernetesPkgApisExtensionsV1beta1Scale.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="watchAppsOpenshiftIoV1DeploymentConfigListForAllNamespaces"></a>
# **watchAppsOpenshiftIoV1DeploymentConfigListForAllNamespaces**
> IoK8sApimachineryPkgApisMetaV1WatchEvent watchAppsOpenshiftIoV1DeploymentConfigListForAllNamespaces(opts)



watch individual changes to a list of DeploymentConfig

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let opts = { 
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.watchAppsOpenshiftIoV1DeploymentConfigListForAllNamespaces(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fieldSelector** | **String**| A selector to restrict the list of returned objects by their fields. Defaults to everything. | [optional] 
 **labelSelector** | **String**| A selector to restrict the list of returned objects by their labels. Defaults to everything. | [optional] 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **resourceVersion** | **String**| When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. | [optional] 
 **timeoutSeconds** | **Number**| Timeout for the list/watch call. | [optional] 
 **watch** | **Boolean**| Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | [optional] 

### Return type

[**IoK8sApimachineryPkgApisMetaV1WatchEvent**](IoK8sApimachineryPkgApisMetaV1WatchEvent.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch

<a name="watchAppsOpenshiftIoV1NamespacedDeploymentConfig"></a>
# **watchAppsOpenshiftIoV1NamespacedDeploymentConfig**
> IoK8sApimachineryPkgApisMetaV1WatchEvent watchAppsOpenshiftIoV1NamespacedDeploymentConfig(name, namespace, opts)



watch changes to an object of kind DeploymentConfig

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let name = "name_example"; // String | name of the DeploymentConfig

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let opts = { 
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.watchAppsOpenshiftIoV1NamespacedDeploymentConfig(name, namespace, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| name of the DeploymentConfig | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **fieldSelector** | **String**| A selector to restrict the list of returned objects by their fields. Defaults to everything. | [optional] 
 **labelSelector** | **String**| A selector to restrict the list of returned objects by their labels. Defaults to everything. | [optional] 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **resourceVersion** | **String**| When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. | [optional] 
 **timeoutSeconds** | **Number**| Timeout for the list/watch call. | [optional] 
 **watch** | **Boolean**| Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | [optional] 

### Return type

[**IoK8sApimachineryPkgApisMetaV1WatchEvent**](IoK8sApimachineryPkgApisMetaV1WatchEvent.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch

<a name="watchAppsOpenshiftIoV1NamespacedDeploymentConfigList"></a>
# **watchAppsOpenshiftIoV1NamespacedDeploymentConfigList**
> IoK8sApimachineryPkgApisMetaV1WatchEvent watchAppsOpenshiftIoV1NamespacedDeploymentConfigList(namespace, opts)



watch individual changes to a list of DeploymentConfig

### Example
```javascript
import OpenShiftApiWithKubernetes from 'open_shift_api__with_kubernetes';
let defaultClient = OpenShiftApiWithKubernetes.ApiClient.instance;

// Configure API key authorization: BearerToken
let BearerToken = defaultClient.authentications['BearerToken'];
BearerToken.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//BearerToken.apiKeyPrefix = 'Token';

// Configure OAuth2 access token for authorization: Oauth2AccessToken
let Oauth2AccessToken = defaultClient.authentications['Oauth2AccessToken'];
Oauth2AccessToken.accessToken = 'YOUR ACCESS TOKEN';

// Configure OAuth2 access token for authorization: Oauth2Implicit
let Oauth2Implicit = defaultClient.authentications['Oauth2Implicit'];
Oauth2Implicit.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new OpenShiftApiWithKubernetes.AppsOpenshiftIoV1Api();

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let opts = { 
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.watchAppsOpenshiftIoV1NamespacedDeploymentConfigList(namespace, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **fieldSelector** | **String**| A selector to restrict the list of returned objects by their fields. Defaults to everything. | [optional] 
 **labelSelector** | **String**| A selector to restrict the list of returned objects by their labels. Defaults to everything. | [optional] 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **resourceVersion** | **String**| When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it&#39;s 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv. | [optional] 
 **timeoutSeconds** | **Number**| Timeout for the list/watch call. | [optional] 
 **watch** | **Boolean**| Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion. | [optional] 

### Return type

[**IoK8sApimachineryPkgApisMetaV1WatchEvent**](IoK8sApimachineryPkgApisMetaV1WatchEvent.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch

