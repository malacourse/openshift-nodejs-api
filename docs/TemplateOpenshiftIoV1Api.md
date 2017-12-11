# OpenShiftApiWithKubernetes.TemplateOpenshiftIoV1Api

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTemplateOpenshiftIoV1NamespacedTemplate**](TemplateOpenshiftIoV1Api.md#createTemplateOpenshiftIoV1NamespacedTemplate) | **POST** /apis/template.openshift.io/v1/namespaces/{namespace}/templates | 
[**createTemplateOpenshiftIoV1TemplateForAllNamespaces**](TemplateOpenshiftIoV1Api.md#createTemplateOpenshiftIoV1TemplateForAllNamespaces) | **POST** /apis/template.openshift.io/v1/templates | 
[**deleteTemplateOpenshiftIoV1CollectionNamespacedTemplate**](TemplateOpenshiftIoV1Api.md#deleteTemplateOpenshiftIoV1CollectionNamespacedTemplate) | **DELETE** /apis/template.openshift.io/v1/namespaces/{namespace}/templates | 
[**deleteTemplateOpenshiftIoV1NamespacedTemplate**](TemplateOpenshiftIoV1Api.md#deleteTemplateOpenshiftIoV1NamespacedTemplate) | **DELETE** /apis/template.openshift.io/v1/namespaces/{namespace}/templates/{name} | 
[**getTemplateOpenshiftIoV1APIResources**](TemplateOpenshiftIoV1Api.md#getTemplateOpenshiftIoV1APIResources) | **GET** /apis/template.openshift.io/v1/ | 
[**listTemplateOpenshiftIoV1NamespacedTemplate**](TemplateOpenshiftIoV1Api.md#listTemplateOpenshiftIoV1NamespacedTemplate) | **GET** /apis/template.openshift.io/v1/namespaces/{namespace}/templates | 
[**listTemplateOpenshiftIoV1TemplateForAllNamespaces**](TemplateOpenshiftIoV1Api.md#listTemplateOpenshiftIoV1TemplateForAllNamespaces) | **GET** /apis/template.openshift.io/v1/templates | 
[**patchTemplateOpenshiftIoV1NamespacedTemplate**](TemplateOpenshiftIoV1Api.md#patchTemplateOpenshiftIoV1NamespacedTemplate) | **PATCH** /apis/template.openshift.io/v1/namespaces/{namespace}/templates/{name} | 
[**readTemplateOpenshiftIoV1NamespacedTemplate**](TemplateOpenshiftIoV1Api.md#readTemplateOpenshiftIoV1NamespacedTemplate) | **GET** /apis/template.openshift.io/v1/namespaces/{namespace}/templates/{name} | 
[**replaceTemplateOpenshiftIoV1NamespacedTemplate**](TemplateOpenshiftIoV1Api.md#replaceTemplateOpenshiftIoV1NamespacedTemplate) | **PUT** /apis/template.openshift.io/v1/namespaces/{namespace}/templates/{name} | 
[**watchTemplateOpenshiftIoV1NamespacedTemplate**](TemplateOpenshiftIoV1Api.md#watchTemplateOpenshiftIoV1NamespacedTemplate) | **GET** /apis/template.openshift.io/v1/watch/namespaces/{namespace}/templates/{name} | 
[**watchTemplateOpenshiftIoV1NamespacedTemplateList**](TemplateOpenshiftIoV1Api.md#watchTemplateOpenshiftIoV1NamespacedTemplateList) | **GET** /apis/template.openshift.io/v1/watch/namespaces/{namespace}/templates | 
[**watchTemplateOpenshiftIoV1TemplateListForAllNamespaces**](TemplateOpenshiftIoV1Api.md#watchTemplateOpenshiftIoV1TemplateListForAllNamespaces) | **GET** /apis/template.openshift.io/v1/watch/templates | 


<a name="createTemplateOpenshiftIoV1NamespacedTemplate"></a>
# **createTemplateOpenshiftIoV1NamespacedTemplate**
> ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template createTemplateOpenshiftIoV1NamespacedTemplate(namespacebody, opts)



create a Template

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

let apiInstance = new OpenShiftApiWithKubernetes.TemplateOpenshiftIoV1Api();

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template(); // ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template | 

let opts = { 
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
};

apiInstance.createTemplateOpenshiftIoV1NamespacedTemplate(namespacebody, opts, (error, data, response) => {
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
 **body** | [**ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template**](ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template**](ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="createTemplateOpenshiftIoV1TemplateForAllNamespaces"></a>
# **createTemplateOpenshiftIoV1TemplateForAllNamespaces**
> ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template createTemplateOpenshiftIoV1TemplateForAllNamespaces(body, opts)



create a Template

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

let apiInstance = new OpenShiftApiWithKubernetes.TemplateOpenshiftIoV1Api();

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template(); // ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createTemplateOpenshiftIoV1TemplateForAllNamespaces(body, opts, (error, data, response) => {
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
 **body** | [**ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template**](ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template**](ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="deleteTemplateOpenshiftIoV1CollectionNamespacedTemplate"></a>
# **deleteTemplateOpenshiftIoV1CollectionNamespacedTemplate**
> IoK8sApimachineryPkgApisMetaV1Status deleteTemplateOpenshiftIoV1CollectionNamespacedTemplate(namespace, opts)



delete collection of Template

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

let apiInstance = new OpenShiftApiWithKubernetes.TemplateOpenshiftIoV1Api();

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let opts = { 
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.deleteTemplateOpenshiftIoV1CollectionNamespacedTemplate(namespace, opts, (error, data, response) => {
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

<a name="deleteTemplateOpenshiftIoV1NamespacedTemplate"></a>
# **deleteTemplateOpenshiftIoV1NamespacedTemplate**
> IoK8sApimachineryPkgApisMetaV1Status deleteTemplateOpenshiftIoV1NamespacedTemplate(name, namespace, body, opts)



delete a Template

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

let apiInstance = new OpenShiftApiWithKubernetes.TemplateOpenshiftIoV1Api();

let name = "name_example"; // String | name of the Template

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.IoK8sApimachineryPkgApisMetaV1DeleteOptions(); // IoK8sApimachineryPkgApisMetaV1DeleteOptions | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
  'gracePeriodSeconds': 56, // Number | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
  'orphanDependents': true, // Boolean | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
  'propagationPolicy': "propagationPolicy_example" // String | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy.
};

apiInstance.deleteTemplateOpenshiftIoV1NamespacedTemplate(name, namespace, body, opts, (error, data, response) => {
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
 **name** | **String**| name of the Template | 
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

<a name="getTemplateOpenshiftIoV1APIResources"></a>
# **getTemplateOpenshiftIoV1APIResources**
> IoK8sApimachineryPkgApisMetaV1APIResourceList getTemplateOpenshiftIoV1APIResources()



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

let apiInstance = new OpenShiftApiWithKubernetes.TemplateOpenshiftIoV1Api();

apiInstance.getTemplateOpenshiftIoV1APIResources((error, data, response) => {
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

<a name="listTemplateOpenshiftIoV1NamespacedTemplate"></a>
# **listTemplateOpenshiftIoV1NamespacedTemplate**
> ComGithubOpenshiftOriginPkgTemplateApisTemplateV1TemplateList listTemplateOpenshiftIoV1NamespacedTemplate(namespace, opts)



list or watch objects of kind Template

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

let apiInstance = new OpenShiftApiWithKubernetes.TemplateOpenshiftIoV1Api();

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let opts = { 
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.listTemplateOpenshiftIoV1NamespacedTemplate(namespace, opts, (error, data, response) => {
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

[**ComGithubOpenshiftOriginPkgTemplateApisTemplateV1TemplateList**](ComGithubOpenshiftOriginPkgTemplateApisTemplateV1TemplateList.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch

<a name="listTemplateOpenshiftIoV1TemplateForAllNamespaces"></a>
# **listTemplateOpenshiftIoV1TemplateForAllNamespaces**
> ComGithubOpenshiftOriginPkgTemplateApisTemplateV1TemplateList listTemplateOpenshiftIoV1TemplateForAllNamespaces(opts)



list or watch objects of kind Template

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

let apiInstance = new OpenShiftApiWithKubernetes.TemplateOpenshiftIoV1Api();

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.listTemplateOpenshiftIoV1TemplateForAllNamespaces(opts, (error, data, response) => {
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

[**ComGithubOpenshiftOriginPkgTemplateApisTemplateV1TemplateList**](ComGithubOpenshiftOriginPkgTemplateApisTemplateV1TemplateList.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch

<a name="patchTemplateOpenshiftIoV1NamespacedTemplate"></a>
# **patchTemplateOpenshiftIoV1NamespacedTemplate**
> ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template patchTemplateOpenshiftIoV1NamespacedTemplate(name, namespace, body, opts)



partially update the specified Template

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

let apiInstance = new OpenShiftApiWithKubernetes.TemplateOpenshiftIoV1Api();

let name = "name_example"; // String | name of the Template

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.IoK8sApimachineryPkgApisMetaV1Patch(); // IoK8sApimachineryPkgApisMetaV1Patch | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.patchTemplateOpenshiftIoV1NamespacedTemplate(name, namespace, body, opts, (error, data, response) => {
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
 **name** | **String**| name of the Template | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**IoK8sApimachineryPkgApisMetaV1Patch**](IoK8sApimachineryPkgApisMetaV1Patch.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template**](ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="readTemplateOpenshiftIoV1NamespacedTemplate"></a>
# **readTemplateOpenshiftIoV1NamespacedTemplate**
> ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template readTemplateOpenshiftIoV1NamespacedTemplate(name, namespace, , opts)



read the specified Template

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

let apiInstance = new OpenShiftApiWithKubernetes.TemplateOpenshiftIoV1Api();

let name = "name_example"; // String | name of the Template

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
  'exact': true, // Boolean | Should the export be exact.  Exact export maintains cluster-specific fields like 'Namespace'.
  '_export': true // Boolean | Should this value be exported.  Export strips fields that a user can not specify.
};

apiInstance.readTemplateOpenshiftIoV1NamespacedTemplate(name, namespace, , opts, (error, data, response) => {
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
 **name** | **String**| name of the Template | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **exact** | **Boolean**| Should the export be exact.  Exact export maintains cluster-specific fields like &#39;Namespace&#39;. | [optional] 
 **_export** | **Boolean**| Should this value be exported.  Export strips fields that a user can not specify. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template**](ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replaceTemplateOpenshiftIoV1NamespacedTemplate"></a>
# **replaceTemplateOpenshiftIoV1NamespacedTemplate**
> ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template replaceTemplateOpenshiftIoV1NamespacedTemplate(name, namespace, body, opts)



replace the specified Template

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

let apiInstance = new OpenShiftApiWithKubernetes.TemplateOpenshiftIoV1Api();

let name = "name_example"; // String | name of the Template

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template(); // ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.replaceTemplateOpenshiftIoV1NamespacedTemplate(name, namespace, body, opts, (error, data, response) => {
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
 **name** | **String**| name of the Template | 
 **namespace** | **String**| object name and auth scope, such as for teams and projects | 
 **body** | [**ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template**](ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template**](ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="watchTemplateOpenshiftIoV1NamespacedTemplate"></a>
# **watchTemplateOpenshiftIoV1NamespacedTemplate**
> IoK8sApimachineryPkgApisMetaV1WatchEvent watchTemplateOpenshiftIoV1NamespacedTemplate(name, namespace, opts)



watch changes to an object of kind Template

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

let apiInstance = new OpenShiftApiWithKubernetes.TemplateOpenshiftIoV1Api();

let name = "name_example"; // String | name of the Template

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let opts = { 
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.watchTemplateOpenshiftIoV1NamespacedTemplate(name, namespace, opts, (error, data, response) => {
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
 **name** | **String**| name of the Template | 
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

<a name="watchTemplateOpenshiftIoV1NamespacedTemplateList"></a>
# **watchTemplateOpenshiftIoV1NamespacedTemplateList**
> IoK8sApimachineryPkgApisMetaV1WatchEvent watchTemplateOpenshiftIoV1NamespacedTemplateList(namespace, opts)



watch individual changes to a list of Template

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

let apiInstance = new OpenShiftApiWithKubernetes.TemplateOpenshiftIoV1Api();

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let opts = { 
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.watchTemplateOpenshiftIoV1NamespacedTemplateList(namespace, opts, (error, data, response) => {
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

<a name="watchTemplateOpenshiftIoV1TemplateListForAllNamespaces"></a>
# **watchTemplateOpenshiftIoV1TemplateListForAllNamespaces**
> IoK8sApimachineryPkgApisMetaV1WatchEvent watchTemplateOpenshiftIoV1TemplateListForAllNamespaces(opts)



watch individual changes to a list of Template

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

let apiInstance = new OpenShiftApiWithKubernetes.TemplateOpenshiftIoV1Api();

let opts = { 
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.watchTemplateOpenshiftIoV1TemplateListForAllNamespaces(opts, (error, data, response) => {
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

