# OpenShiftApiWithKubernetes.DefaultApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createNamespacedProcessedTemplate**](DefaultApi.md#createNamespacedProcessedTemplate) | **POST** /oapi/v1/namespaces/{namespace}/processedtemplates | 
[**createNamespacedProcessedTemplateV1**](DefaultApi.md#createNamespacedProcessedTemplateV1) | **POST** /apis/template.openshift.io/v1/namespaces/{namespace}/processedtemplates | 
[**createProcessedTemplateForAllNamespaces**](DefaultApi.md#createProcessedTemplateForAllNamespaces) | **POST** /apis/template.openshift.io/v1/processedtemplates | 
[**createProcessedTemplateForAllNamespacesV1**](DefaultApi.md#createProcessedTemplateForAllNamespacesV1) | **POST** /oapi/v1/processedtemplates | 


<a name="createNamespacedProcessedTemplate"></a>
# **createNamespacedProcessedTemplate**
> ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template createNamespacedProcessedTemplate(namespace, body, opts)



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

let apiInstance = new OpenShiftApiWithKubernetes.DefaultApi();

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template(); // ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createNamespacedProcessedTemplate(namespace, body, opts, (error, data, response) => {
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

<a name="createNamespacedProcessedTemplateV1"></a>
# **createNamespacedProcessedTemplateV1**
> ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template createNamespacedProcessedTemplateV1(namespace, body, opts)



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

let apiInstance = new OpenShiftApiWithKubernetes.DefaultApi();

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template(); // ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createNamespacedProcessedTemplateV1(namespace, body, opts, (error, data, response) => {
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

<a name="createProcessedTemplateForAllNamespaces"></a>
# **createProcessedTemplateForAllNamespaces**
> ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template createProcessedTemplateForAllNamespaces(body, opts)



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

let apiInstance = new OpenShiftApiWithKubernetes.DefaultApi();

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template(); // ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createProcessedTemplateForAllNamespaces(body, opts, (error, data, response) => {
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

<a name="createProcessedTemplateForAllNamespacesV1"></a>
# **createProcessedTemplateForAllNamespacesV1**
> ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template createProcessedTemplateForAllNamespacesV1(body, opts)



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

let apiInstance = new OpenShiftApiWithKubernetes.DefaultApi();

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template(); // ComGithubOpenshiftOriginPkgTemplateApisTemplateV1Template | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createProcessedTemplateForAllNamespacesV1(body, opts, (error, data, response) => {
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

