# OpenShiftApiWithKubernetes.QuotaOpenshiftIoV1Api

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createQuotaOpenshiftIoV1ClusterResourceQuota**](QuotaOpenshiftIoV1Api.md#createQuotaOpenshiftIoV1ClusterResourceQuota) | **POST** /apis/quota.openshift.io/v1/clusterresourcequotas | 
[**deleteQuotaOpenshiftIoV1ClusterResourceQuota**](QuotaOpenshiftIoV1Api.md#deleteQuotaOpenshiftIoV1ClusterResourceQuota) | **DELETE** /apis/quota.openshift.io/v1/clusterresourcequotas/{name} | 
[**deleteQuotaOpenshiftIoV1CollectionClusterResourceQuota**](QuotaOpenshiftIoV1Api.md#deleteQuotaOpenshiftIoV1CollectionClusterResourceQuota) | **DELETE** /apis/quota.openshift.io/v1/clusterresourcequotas | 
[**getQuotaOpenshiftIoV1APIResources**](QuotaOpenshiftIoV1Api.md#getQuotaOpenshiftIoV1APIResources) | **GET** /apis/quota.openshift.io/v1/ | 
[**listQuotaOpenshiftIoV1AppliedClusterResourceQuotaForAllNamespaces**](QuotaOpenshiftIoV1Api.md#listQuotaOpenshiftIoV1AppliedClusterResourceQuotaForAllNamespaces) | **GET** /apis/quota.openshift.io/v1/appliedclusterresourcequotas | 
[**listQuotaOpenshiftIoV1ClusterResourceQuota**](QuotaOpenshiftIoV1Api.md#listQuotaOpenshiftIoV1ClusterResourceQuota) | **GET** /apis/quota.openshift.io/v1/clusterresourcequotas | 
[**listQuotaOpenshiftIoV1NamespacedAppliedClusterResourceQuota**](QuotaOpenshiftIoV1Api.md#listQuotaOpenshiftIoV1NamespacedAppliedClusterResourceQuota) | **GET** /apis/quota.openshift.io/v1/namespaces/{namespace}/appliedclusterresourcequotas | 
[**patchQuotaOpenshiftIoV1ClusterResourceQuota**](QuotaOpenshiftIoV1Api.md#patchQuotaOpenshiftIoV1ClusterResourceQuota) | **PATCH** /apis/quota.openshift.io/v1/clusterresourcequotas/{name} | 
[**patchQuotaOpenshiftIoV1ClusterResourceQuotaStatus**](QuotaOpenshiftIoV1Api.md#patchQuotaOpenshiftIoV1ClusterResourceQuotaStatus) | **PATCH** /apis/quota.openshift.io/v1/clusterresourcequotas/{name}/status | 
[**readQuotaOpenshiftIoV1ClusterResourceQuota**](QuotaOpenshiftIoV1Api.md#readQuotaOpenshiftIoV1ClusterResourceQuota) | **GET** /apis/quota.openshift.io/v1/clusterresourcequotas/{name} | 
[**readQuotaOpenshiftIoV1ClusterResourceQuotaStatus**](QuotaOpenshiftIoV1Api.md#readQuotaOpenshiftIoV1ClusterResourceQuotaStatus) | **GET** /apis/quota.openshift.io/v1/clusterresourcequotas/{name}/status | 
[**readQuotaOpenshiftIoV1NamespacedAppliedClusterResourceQuota**](QuotaOpenshiftIoV1Api.md#readQuotaOpenshiftIoV1NamespacedAppliedClusterResourceQuota) | **GET** /apis/quota.openshift.io/v1/namespaces/{namespace}/appliedclusterresourcequotas/{name} | 
[**replaceQuotaOpenshiftIoV1ClusterResourceQuota**](QuotaOpenshiftIoV1Api.md#replaceQuotaOpenshiftIoV1ClusterResourceQuota) | **PUT** /apis/quota.openshift.io/v1/clusterresourcequotas/{name} | 
[**replaceQuotaOpenshiftIoV1ClusterResourceQuotaStatus**](QuotaOpenshiftIoV1Api.md#replaceQuotaOpenshiftIoV1ClusterResourceQuotaStatus) | **PUT** /apis/quota.openshift.io/v1/clusterresourcequotas/{name}/status | 
[**watchQuotaOpenshiftIoV1ClusterResourceQuota**](QuotaOpenshiftIoV1Api.md#watchQuotaOpenshiftIoV1ClusterResourceQuota) | **GET** /apis/quota.openshift.io/v1/watch/clusterresourcequotas/{name} | 
[**watchQuotaOpenshiftIoV1ClusterResourceQuotaList**](QuotaOpenshiftIoV1Api.md#watchQuotaOpenshiftIoV1ClusterResourceQuotaList) | **GET** /apis/quota.openshift.io/v1/watch/clusterresourcequotas | 


<a name="createQuotaOpenshiftIoV1ClusterResourceQuota"></a>
# **createQuotaOpenshiftIoV1ClusterResourceQuota**
> ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota createQuotaOpenshiftIoV1ClusterResourceQuota(body, opts)



create a ClusterResourceQuota

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

let apiInstance = new OpenShiftApiWithKubernetes.QuotaOpenshiftIoV1Api();

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota(); // ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota | 

let opts = { 
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
};

apiInstance.createQuotaOpenshiftIoV1ClusterResourceQuota(body, opts, (error, data, response) => {
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
 **body** | [**ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota**](ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota**](ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="deleteQuotaOpenshiftIoV1ClusterResourceQuota"></a>
# **deleteQuotaOpenshiftIoV1ClusterResourceQuota**
> IoK8sApimachineryPkgApisMetaV1Status deleteQuotaOpenshiftIoV1ClusterResourceQuota(name, body, opts)



delete a ClusterResourceQuota

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

let apiInstance = new OpenShiftApiWithKubernetes.QuotaOpenshiftIoV1Api();

let name = "name_example"; // String | name of the ClusterResourceQuota

let body = new OpenShiftApiWithKubernetes.IoK8sApimachineryPkgApisMetaV1DeleteOptions(); // IoK8sApimachineryPkgApisMetaV1DeleteOptions | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
  'gracePeriodSeconds': 56, // Number | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
  'orphanDependents': true, // Boolean | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
  'propagationPolicy': "propagationPolicy_example" // String | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy.
};

apiInstance.deleteQuotaOpenshiftIoV1ClusterResourceQuota(name, body, opts, (error, data, response) => {
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
 **name** | **String**| name of the ClusterResourceQuota | 
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

<a name="deleteQuotaOpenshiftIoV1CollectionClusterResourceQuota"></a>
# **deleteQuotaOpenshiftIoV1CollectionClusterResourceQuota**
> IoK8sApimachineryPkgApisMetaV1Status deleteQuotaOpenshiftIoV1CollectionClusterResourceQuota(opts)



delete collection of ClusterResourceQuota

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

let apiInstance = new OpenShiftApiWithKubernetes.QuotaOpenshiftIoV1Api();

let opts = { 
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.deleteQuotaOpenshiftIoV1CollectionClusterResourceQuota(opts, (error, data, response) => {
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

[**IoK8sApimachineryPkgApisMetaV1Status**](IoK8sApimachineryPkgApisMetaV1Status.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="getQuotaOpenshiftIoV1APIResources"></a>
# **getQuotaOpenshiftIoV1APIResources**
> IoK8sApimachineryPkgApisMetaV1APIResourceList getQuotaOpenshiftIoV1APIResources()



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

let apiInstance = new OpenShiftApiWithKubernetes.QuotaOpenshiftIoV1Api();

apiInstance.getQuotaOpenshiftIoV1APIResources((error, data, response) => {
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

<a name="listQuotaOpenshiftIoV1AppliedClusterResourceQuotaForAllNamespaces"></a>
# **listQuotaOpenshiftIoV1AppliedClusterResourceQuotaForAllNamespaces**
> ComGithubOpenshiftOriginPkgQuotaApisQuotaV1AppliedClusterResourceQuotaList listQuotaOpenshiftIoV1AppliedClusterResourceQuotaForAllNamespaces(opts)



list objects of kind AppliedClusterResourceQuota

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

let apiInstance = new OpenShiftApiWithKubernetes.QuotaOpenshiftIoV1Api();

let opts = { 
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.listQuotaOpenshiftIoV1AppliedClusterResourceQuotaForAllNamespaces(opts, (error, data, response) => {
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

[**ComGithubOpenshiftOriginPkgQuotaApisQuotaV1AppliedClusterResourceQuotaList**](ComGithubOpenshiftOriginPkgQuotaApisQuotaV1AppliedClusterResourceQuotaList.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch

<a name="listQuotaOpenshiftIoV1ClusterResourceQuota"></a>
# **listQuotaOpenshiftIoV1ClusterResourceQuota**
> ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuotaList listQuotaOpenshiftIoV1ClusterResourceQuota(opts)



list or watch objects of kind ClusterResourceQuota

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

let apiInstance = new OpenShiftApiWithKubernetes.QuotaOpenshiftIoV1Api();

let opts = { 
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.listQuotaOpenshiftIoV1ClusterResourceQuota(opts, (error, data, response) => {
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

[**ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuotaList**](ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuotaList.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch

<a name="listQuotaOpenshiftIoV1NamespacedAppliedClusterResourceQuota"></a>
# **listQuotaOpenshiftIoV1NamespacedAppliedClusterResourceQuota**
> ComGithubOpenshiftOriginPkgQuotaApisQuotaV1AppliedClusterResourceQuotaList listQuotaOpenshiftIoV1NamespacedAppliedClusterResourceQuota(namespace, opts)



list objects of kind AppliedClusterResourceQuota

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

let apiInstance = new OpenShiftApiWithKubernetes.QuotaOpenshiftIoV1Api();

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let opts = { 
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.listQuotaOpenshiftIoV1NamespacedAppliedClusterResourceQuota(namespace, opts, (error, data, response) => {
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

[**ComGithubOpenshiftOriginPkgQuotaApisQuotaV1AppliedClusterResourceQuotaList**](ComGithubOpenshiftOriginPkgQuotaApisQuotaV1AppliedClusterResourceQuotaList.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch

<a name="patchQuotaOpenshiftIoV1ClusterResourceQuota"></a>
# **patchQuotaOpenshiftIoV1ClusterResourceQuota**
> ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota patchQuotaOpenshiftIoV1ClusterResourceQuota(name, body, opts)



partially update the specified ClusterResourceQuota

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

let apiInstance = new OpenShiftApiWithKubernetes.QuotaOpenshiftIoV1Api();

let name = "name_example"; // String | name of the ClusterResourceQuota

let body = new OpenShiftApiWithKubernetes.IoK8sApimachineryPkgApisMetaV1Patch(); // IoK8sApimachineryPkgApisMetaV1Patch | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.patchQuotaOpenshiftIoV1ClusterResourceQuota(name, body, opts, (error, data, response) => {
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
 **name** | **String**| name of the ClusterResourceQuota | 
 **body** | [**IoK8sApimachineryPkgApisMetaV1Patch**](IoK8sApimachineryPkgApisMetaV1Patch.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota**](ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="patchQuotaOpenshiftIoV1ClusterResourceQuotaStatus"></a>
# **patchQuotaOpenshiftIoV1ClusterResourceQuotaStatus**
> ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota patchQuotaOpenshiftIoV1ClusterResourceQuotaStatus(name, body, opts)



partially update status of the specified ClusterResourceQuota

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

let apiInstance = new OpenShiftApiWithKubernetes.QuotaOpenshiftIoV1Api();

let name = "name_example"; // String | name of the ClusterResourceQuota

let body = new OpenShiftApiWithKubernetes.IoK8sApimachineryPkgApisMetaV1Patch(); // IoK8sApimachineryPkgApisMetaV1Patch | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.patchQuotaOpenshiftIoV1ClusterResourceQuotaStatus(name, body, opts, (error, data, response) => {
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
 **name** | **String**| name of the ClusterResourceQuota | 
 **body** | [**IoK8sApimachineryPkgApisMetaV1Patch**](IoK8sApimachineryPkgApisMetaV1Patch.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota**](ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="readQuotaOpenshiftIoV1ClusterResourceQuota"></a>
# **readQuotaOpenshiftIoV1ClusterResourceQuota**
> ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota readQuotaOpenshiftIoV1ClusterResourceQuota(name, , opts)



read the specified ClusterResourceQuota

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

let apiInstance = new OpenShiftApiWithKubernetes.QuotaOpenshiftIoV1Api();

let name = "name_example"; // String | name of the ClusterResourceQuota

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
  'exact': true, // Boolean | Should the export be exact.  Exact export maintains cluster-specific fields like 'Namespace'.
  '_export': true // Boolean | Should this value be exported.  Export strips fields that a user can not specify.
};

apiInstance.readQuotaOpenshiftIoV1ClusterResourceQuota(name, , opts, (error, data, response) => {
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
 **name** | **String**| name of the ClusterResourceQuota | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **exact** | **Boolean**| Should the export be exact.  Exact export maintains cluster-specific fields like &#39;Namespace&#39;. | [optional] 
 **_export** | **Boolean**| Should this value be exported.  Export strips fields that a user can not specify. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota**](ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="readQuotaOpenshiftIoV1ClusterResourceQuotaStatus"></a>
# **readQuotaOpenshiftIoV1ClusterResourceQuotaStatus**
> ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota readQuotaOpenshiftIoV1ClusterResourceQuotaStatus(name, , opts)



read status of the specified ClusterResourceQuota

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

let apiInstance = new OpenShiftApiWithKubernetes.QuotaOpenshiftIoV1Api();

let name = "name_example"; // String | name of the ClusterResourceQuota

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.readQuotaOpenshiftIoV1ClusterResourceQuotaStatus(name, , opts, (error, data, response) => {
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
 **name** | **String**| name of the ClusterResourceQuota | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota**](ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="readQuotaOpenshiftIoV1NamespacedAppliedClusterResourceQuota"></a>
# **readQuotaOpenshiftIoV1NamespacedAppliedClusterResourceQuota**
> ComGithubOpenshiftOriginPkgQuotaApisQuotaV1AppliedClusterResourceQuota readQuotaOpenshiftIoV1NamespacedAppliedClusterResourceQuota(name, namespace, opts)



read the specified AppliedClusterResourceQuota

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

let apiInstance = new OpenShiftApiWithKubernetes.QuotaOpenshiftIoV1Api();

let name = "name_example"; // String | name of the AppliedClusterResourceQuota

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.readQuotaOpenshiftIoV1NamespacedAppliedClusterResourceQuota(name, namespace, opts, (error, data, response) => {
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
 **name** | **String**| name of the AppliedClusterResourceQuota | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgQuotaApisQuotaV1AppliedClusterResourceQuota**](ComGithubOpenshiftOriginPkgQuotaApisQuotaV1AppliedClusterResourceQuota.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replaceQuotaOpenshiftIoV1ClusterResourceQuota"></a>
# **replaceQuotaOpenshiftIoV1ClusterResourceQuota**
> ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota replaceQuotaOpenshiftIoV1ClusterResourceQuota(name, body, opts)



replace the specified ClusterResourceQuota

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

let apiInstance = new OpenShiftApiWithKubernetes.QuotaOpenshiftIoV1Api();

let name = "name_example"; // String | name of the ClusterResourceQuota

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota(); // ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.replaceQuotaOpenshiftIoV1ClusterResourceQuota(name, body, opts, (error, data, response) => {
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
 **name** | **String**| name of the ClusterResourceQuota | 
 **body** | [**ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota**](ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota**](ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replaceQuotaOpenshiftIoV1ClusterResourceQuotaStatus"></a>
# **replaceQuotaOpenshiftIoV1ClusterResourceQuotaStatus**
> ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota replaceQuotaOpenshiftIoV1ClusterResourceQuotaStatus(name, body, opts)



replace status of the specified ClusterResourceQuota

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

let apiInstance = new OpenShiftApiWithKubernetes.QuotaOpenshiftIoV1Api();

let name = "name_example"; // String | name of the ClusterResourceQuota

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota(); // ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.replaceQuotaOpenshiftIoV1ClusterResourceQuotaStatus(name, body, opts, (error, data, response) => {
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
 **name** | **String**| name of the ClusterResourceQuota | 
 **body** | [**ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota**](ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota**](ComGithubOpenshiftOriginPkgQuotaApisQuotaV1ClusterResourceQuota.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="watchQuotaOpenshiftIoV1ClusterResourceQuota"></a>
# **watchQuotaOpenshiftIoV1ClusterResourceQuota**
> IoK8sApimachineryPkgApisMetaV1WatchEvent watchQuotaOpenshiftIoV1ClusterResourceQuota(name, opts)



watch changes to an object of kind ClusterResourceQuota

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

let apiInstance = new OpenShiftApiWithKubernetes.QuotaOpenshiftIoV1Api();

let name = "name_example"; // String | name of the ClusterResourceQuota

let opts = { 
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.watchQuotaOpenshiftIoV1ClusterResourceQuota(name, opts, (error, data, response) => {
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
 **name** | **String**| name of the ClusterResourceQuota | 
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

<a name="watchQuotaOpenshiftIoV1ClusterResourceQuotaList"></a>
# **watchQuotaOpenshiftIoV1ClusterResourceQuotaList**
> IoK8sApimachineryPkgApisMetaV1WatchEvent watchQuotaOpenshiftIoV1ClusterResourceQuotaList(opts)



watch individual changes to a list of ClusterResourceQuota

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

let apiInstance = new OpenShiftApiWithKubernetes.QuotaOpenshiftIoV1Api();

let opts = { 
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.watchQuotaOpenshiftIoV1ClusterResourceQuotaList(opts, (error, data, response) => {
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

