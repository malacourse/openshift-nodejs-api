# OpenShiftApiWithKubernetes.SecurityOpenshiftIoV1Api

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSecurityOpenshiftIoV1NamespacedPodSecurityPolicyReview**](SecurityOpenshiftIoV1Api.md#createSecurityOpenshiftIoV1NamespacedPodSecurityPolicyReview) | **POST** /apis/security.openshift.io/v1/namespaces/{namespace}/podsecuritypolicyreviews | 
[**createSecurityOpenshiftIoV1NamespacedPodSecurityPolicySelfSubjectReview**](SecurityOpenshiftIoV1Api.md#createSecurityOpenshiftIoV1NamespacedPodSecurityPolicySelfSubjectReview) | **POST** /apis/security.openshift.io/v1/namespaces/{namespace}/podsecuritypolicyselfsubjectreviews | 
[**createSecurityOpenshiftIoV1NamespacedPodSecurityPolicySubjectReview**](SecurityOpenshiftIoV1Api.md#createSecurityOpenshiftIoV1NamespacedPodSecurityPolicySubjectReview) | **POST** /apis/security.openshift.io/v1/namespaces/{namespace}/podsecuritypolicysubjectreviews | 
[**createSecurityOpenshiftIoV1PodSecurityPolicyReviewForAllNamespaces**](SecurityOpenshiftIoV1Api.md#createSecurityOpenshiftIoV1PodSecurityPolicyReviewForAllNamespaces) | **POST** /apis/security.openshift.io/v1/podsecuritypolicyreviews | 
[**createSecurityOpenshiftIoV1PodSecurityPolicySelfSubjectReviewForAllNamespaces**](SecurityOpenshiftIoV1Api.md#createSecurityOpenshiftIoV1PodSecurityPolicySelfSubjectReviewForAllNamespaces) | **POST** /apis/security.openshift.io/v1/podsecuritypolicyselfsubjectreviews | 
[**createSecurityOpenshiftIoV1PodSecurityPolicySubjectReviewForAllNamespaces**](SecurityOpenshiftIoV1Api.md#createSecurityOpenshiftIoV1PodSecurityPolicySubjectReviewForAllNamespaces) | **POST** /apis/security.openshift.io/v1/podsecuritypolicysubjectreviews | 
[**createSecurityOpenshiftIoV1SecurityContextConstraints**](SecurityOpenshiftIoV1Api.md#createSecurityOpenshiftIoV1SecurityContextConstraints) | **POST** /apis/security.openshift.io/v1/securitycontextconstraints | 
[**deleteSecurityOpenshiftIoV1CollectionSecurityContextConstraints**](SecurityOpenshiftIoV1Api.md#deleteSecurityOpenshiftIoV1CollectionSecurityContextConstraints) | **DELETE** /apis/security.openshift.io/v1/securitycontextconstraints | 
[**deleteSecurityOpenshiftIoV1SecurityContextConstraints**](SecurityOpenshiftIoV1Api.md#deleteSecurityOpenshiftIoV1SecurityContextConstraints) | **DELETE** /apis/security.openshift.io/v1/securitycontextconstraints/{name} | 
[**getSecurityOpenshiftIoV1APIResources**](SecurityOpenshiftIoV1Api.md#getSecurityOpenshiftIoV1APIResources) | **GET** /apis/security.openshift.io/v1/ | 
[**listSecurityOpenshiftIoV1SecurityContextConstraints**](SecurityOpenshiftIoV1Api.md#listSecurityOpenshiftIoV1SecurityContextConstraints) | **GET** /apis/security.openshift.io/v1/securitycontextconstraints | 
[**patchSecurityOpenshiftIoV1SecurityContextConstraints**](SecurityOpenshiftIoV1Api.md#patchSecurityOpenshiftIoV1SecurityContextConstraints) | **PATCH** /apis/security.openshift.io/v1/securitycontextconstraints/{name} | 
[**readSecurityOpenshiftIoV1SecurityContextConstraints**](SecurityOpenshiftIoV1Api.md#readSecurityOpenshiftIoV1SecurityContextConstraints) | **GET** /apis/security.openshift.io/v1/securitycontextconstraints/{name} | 
[**replaceSecurityOpenshiftIoV1SecurityContextConstraints**](SecurityOpenshiftIoV1Api.md#replaceSecurityOpenshiftIoV1SecurityContextConstraints) | **PUT** /apis/security.openshift.io/v1/securitycontextconstraints/{name} | 
[**watchSecurityOpenshiftIoV1SecurityContextConstraints**](SecurityOpenshiftIoV1Api.md#watchSecurityOpenshiftIoV1SecurityContextConstraints) | **GET** /apis/security.openshift.io/v1/watch/securitycontextconstraints/{name} | 
[**watchSecurityOpenshiftIoV1SecurityContextConstraintsList**](SecurityOpenshiftIoV1Api.md#watchSecurityOpenshiftIoV1SecurityContextConstraintsList) | **GET** /apis/security.openshift.io/v1/watch/securitycontextconstraints | 


<a name="createSecurityOpenshiftIoV1NamespacedPodSecurityPolicyReview"></a>
# **createSecurityOpenshiftIoV1NamespacedPodSecurityPolicyReview**
> ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicyReview createSecurityOpenshiftIoV1NamespacedPodSecurityPolicyReview(namespace, body, opts)



create a PodSecurityPolicyReview

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

let apiInstance = new OpenShiftApiWithKubernetes.SecurityOpenshiftIoV1Api();

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicyReview(); // ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicyReview | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createSecurityOpenshiftIoV1NamespacedPodSecurityPolicyReview(namespace, body, opts, (error, data, response) => {
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
 **body** | [**ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicyReview**](ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicyReview.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicyReview**](ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicyReview.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="createSecurityOpenshiftIoV1NamespacedPodSecurityPolicySelfSubjectReview"></a>
# **createSecurityOpenshiftIoV1NamespacedPodSecurityPolicySelfSubjectReview**
> ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySelfSubjectReview createSecurityOpenshiftIoV1NamespacedPodSecurityPolicySelfSubjectReview(namespace, body, opts)



create a PodSecurityPolicySelfSubjectReview

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

let apiInstance = new OpenShiftApiWithKubernetes.SecurityOpenshiftIoV1Api();

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySelfSubjectReview(); // ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySelfSubjectReview | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createSecurityOpenshiftIoV1NamespacedPodSecurityPolicySelfSubjectReview(namespace, body, opts, (error, data, response) => {
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
 **body** | [**ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySelfSubjectReview**](ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySelfSubjectReview.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySelfSubjectReview**](ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySelfSubjectReview.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="createSecurityOpenshiftIoV1NamespacedPodSecurityPolicySubjectReview"></a>
# **createSecurityOpenshiftIoV1NamespacedPodSecurityPolicySubjectReview**
> ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySubjectReview createSecurityOpenshiftIoV1NamespacedPodSecurityPolicySubjectReview(namespace, body, opts)



create a PodSecurityPolicySubjectReview

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

let apiInstance = new OpenShiftApiWithKubernetes.SecurityOpenshiftIoV1Api();

let namespace = "namespace_example"; // String | object name and auth scope, such as for teams and projects

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySubjectReview(); // ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySubjectReview | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createSecurityOpenshiftIoV1NamespacedPodSecurityPolicySubjectReview(namespace, body, opts, (error, data, response) => {
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
 **body** | [**ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySubjectReview**](ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySubjectReview.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySubjectReview**](ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySubjectReview.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="createSecurityOpenshiftIoV1PodSecurityPolicyReviewForAllNamespaces"></a>
# **createSecurityOpenshiftIoV1PodSecurityPolicyReviewForAllNamespaces**
> ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicyReview createSecurityOpenshiftIoV1PodSecurityPolicyReviewForAllNamespaces(body, opts)



create a PodSecurityPolicyReview

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

let apiInstance = new OpenShiftApiWithKubernetes.SecurityOpenshiftIoV1Api();

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicyReview(); // ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicyReview | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createSecurityOpenshiftIoV1PodSecurityPolicyReviewForAllNamespaces(body, opts, (error, data, response) => {
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
 **body** | [**ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicyReview**](ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicyReview.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicyReview**](ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicyReview.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="createSecurityOpenshiftIoV1PodSecurityPolicySelfSubjectReviewForAllNamespaces"></a>
# **createSecurityOpenshiftIoV1PodSecurityPolicySelfSubjectReviewForAllNamespaces**
> ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySelfSubjectReview createSecurityOpenshiftIoV1PodSecurityPolicySelfSubjectReviewForAllNamespaces(body, opts)



create a PodSecurityPolicySelfSubjectReview

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

let apiInstance = new OpenShiftApiWithKubernetes.SecurityOpenshiftIoV1Api();

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySelfSubjectReview(); // ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySelfSubjectReview | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createSecurityOpenshiftIoV1PodSecurityPolicySelfSubjectReviewForAllNamespaces(body, opts, (error, data, response) => {
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
 **body** | [**ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySelfSubjectReview**](ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySelfSubjectReview.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySelfSubjectReview**](ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySelfSubjectReview.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="createSecurityOpenshiftIoV1PodSecurityPolicySubjectReviewForAllNamespaces"></a>
# **createSecurityOpenshiftIoV1PodSecurityPolicySubjectReviewForAllNamespaces**
> ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySubjectReview createSecurityOpenshiftIoV1PodSecurityPolicySubjectReviewForAllNamespaces(body, opts)



create a PodSecurityPolicySubjectReview

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

let apiInstance = new OpenShiftApiWithKubernetes.SecurityOpenshiftIoV1Api();

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySubjectReview(); // ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySubjectReview | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.createSecurityOpenshiftIoV1PodSecurityPolicySubjectReviewForAllNamespaces(body, opts, (error, data, response) => {
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
 **body** | [**ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySubjectReview**](ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySubjectReview.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySubjectReview**](ComGithubOpenshiftOriginPkgSecurityApisSecurityV1PodSecurityPolicySubjectReview.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="createSecurityOpenshiftIoV1SecurityContextConstraints"></a>
# **createSecurityOpenshiftIoV1SecurityContextConstraints**
> ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraints createSecurityOpenshiftIoV1SecurityContextConstraints(body, opts)



create SecurityContextConstraints

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

let apiInstance = new OpenShiftApiWithKubernetes.SecurityOpenshiftIoV1Api();

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraints(); // ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraints | 

let opts = { 
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
};

apiInstance.createSecurityOpenshiftIoV1SecurityContextConstraints(body, opts, (error, data, response) => {
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
 **body** | [**ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraints**](ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraints.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraints**](ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraints.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="deleteSecurityOpenshiftIoV1CollectionSecurityContextConstraints"></a>
# **deleteSecurityOpenshiftIoV1CollectionSecurityContextConstraints**
> IoK8sApimachineryPkgApisMetaV1Status deleteSecurityOpenshiftIoV1CollectionSecurityContextConstraints(opts)



delete collection of SecurityContextConstraints

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

let apiInstance = new OpenShiftApiWithKubernetes.SecurityOpenshiftIoV1Api();

let opts = { 
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.deleteSecurityOpenshiftIoV1CollectionSecurityContextConstraints(opts, (error, data, response) => {
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

<a name="deleteSecurityOpenshiftIoV1SecurityContextConstraints"></a>
# **deleteSecurityOpenshiftIoV1SecurityContextConstraints**
> IoK8sApimachineryPkgApisMetaV1Status deleteSecurityOpenshiftIoV1SecurityContextConstraints(name, body, opts)



delete SecurityContextConstraints

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

let apiInstance = new OpenShiftApiWithKubernetes.SecurityOpenshiftIoV1Api();

let name = "name_example"; // String | name of the SecurityContextConstraints

let body = new OpenShiftApiWithKubernetes.IoK8sApimachineryPkgApisMetaV1DeleteOptions(); // IoK8sApimachineryPkgApisMetaV1DeleteOptions | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
  'gracePeriodSeconds': 56, // Number | The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.
  'orphanDependents': true, // Boolean | Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the \"orphan\" finalizer will be added to/removed from the object's finalizers list. Either this field or PropagationPolicy may be set, but not both.
  'propagationPolicy': "propagationPolicy_example" // String | Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy.
};

apiInstance.deleteSecurityOpenshiftIoV1SecurityContextConstraints(name, body, opts, (error, data, response) => {
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
 **name** | **String**| name of the SecurityContextConstraints | 
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

<a name="getSecurityOpenshiftIoV1APIResources"></a>
# **getSecurityOpenshiftIoV1APIResources**
> IoK8sApimachineryPkgApisMetaV1APIResourceList getSecurityOpenshiftIoV1APIResources()



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

let apiInstance = new OpenShiftApiWithKubernetes.SecurityOpenshiftIoV1Api();

apiInstance.getSecurityOpenshiftIoV1APIResources((error, data, response) => {
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

<a name="listSecurityOpenshiftIoV1SecurityContextConstraints"></a>
# **listSecurityOpenshiftIoV1SecurityContextConstraints**
> ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraintsList listSecurityOpenshiftIoV1SecurityContextConstraints(opts)



list or watch objects of kind SecurityContextConstraints

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

let apiInstance = new OpenShiftApiWithKubernetes.SecurityOpenshiftIoV1Api();

let opts = { 
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.listSecurityOpenshiftIoV1SecurityContextConstraints(opts, (error, data, response) => {
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

[**ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraintsList**](ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraintsList.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf, application/json;stream=watch, application/vnd.kubernetes.protobuf;stream=watch

<a name="patchSecurityOpenshiftIoV1SecurityContextConstraints"></a>
# **patchSecurityOpenshiftIoV1SecurityContextConstraints**
> ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraints patchSecurityOpenshiftIoV1SecurityContextConstraints(name, body, opts)



partially update the specified SecurityContextConstraints

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

let apiInstance = new OpenShiftApiWithKubernetes.SecurityOpenshiftIoV1Api();

let name = "name_example"; // String | name of the SecurityContextConstraints

let body = new OpenShiftApiWithKubernetes.IoK8sApimachineryPkgApisMetaV1Patch(); // IoK8sApimachineryPkgApisMetaV1Patch | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.patchSecurityOpenshiftIoV1SecurityContextConstraints(name, body, opts, (error, data, response) => {
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
 **name** | **String**| name of the SecurityContextConstraints | 
 **body** | [**IoK8sApimachineryPkgApisMetaV1Patch**](IoK8sApimachineryPkgApisMetaV1Patch.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraints**](ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraints.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: application/json-patch+json, application/merge-patch+json, application/strategic-merge-patch+json
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="readSecurityOpenshiftIoV1SecurityContextConstraints"></a>
# **readSecurityOpenshiftIoV1SecurityContextConstraints**
> ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraints readSecurityOpenshiftIoV1SecurityContextConstraints(name, , opts)



read the specified SecurityContextConstraints

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

let apiInstance = new OpenShiftApiWithKubernetes.SecurityOpenshiftIoV1Api();

let name = "name_example"; // String | name of the SecurityContextConstraints

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
  'exact': true, // Boolean | Should the export be exact.  Exact export maintains cluster-specific fields like 'Namespace'.
  '_export': true // Boolean | Should this value be exported.  Export strips fields that a user can not specify.
};

apiInstance.readSecurityOpenshiftIoV1SecurityContextConstraints(name, , opts, (error, data, response) => {
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
 **name** | **String**| name of the SecurityContextConstraints | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 
 **exact** | **Boolean**| Should the export be exact.  Exact export maintains cluster-specific fields like &#39;Namespace&#39;. | [optional] 
 **_export** | **Boolean**| Should this value be exported.  Export strips fields that a user can not specify. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraints**](ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraints.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="replaceSecurityOpenshiftIoV1SecurityContextConstraints"></a>
# **replaceSecurityOpenshiftIoV1SecurityContextConstraints**
> ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraints replaceSecurityOpenshiftIoV1SecurityContextConstraints(name, body, opts)



replace the specified SecurityContextConstraints

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

let apiInstance = new OpenShiftApiWithKubernetes.SecurityOpenshiftIoV1Api();

let name = "name_example"; // String | name of the SecurityContextConstraints

let body = new OpenShiftApiWithKubernetes.ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraints(); // ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraints | 

let opts = { 
  'pretty': "pretty_example" // String | If 'true', then the output is pretty printed.
};

apiInstance.replaceSecurityOpenshiftIoV1SecurityContextConstraints(name, body, opts, (error, data, response) => {
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
 **name** | **String**| name of the SecurityContextConstraints | 
 **body** | [**ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraints**](ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraints.md)|  | 
 **pretty** | **String**| If &#39;true&#39;, then the output is pretty printed. | [optional] 

### Return type

[**ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraints**](ComGithubOpenshiftOriginPkgSecurityApisSecurityV1SecurityContextConstraints.md)

### Authorization

[BearerToken](../README.md#BearerToken), [Oauth2AccessToken](../README.md#Oauth2AccessToken), [Oauth2Implicit](../README.md#Oauth2Implicit)

### HTTP request headers

 - **Content-Type**: */*
 - **Accept**: application/json, application/yaml, application/vnd.kubernetes.protobuf

<a name="watchSecurityOpenshiftIoV1SecurityContextConstraints"></a>
# **watchSecurityOpenshiftIoV1SecurityContextConstraints**
> IoK8sApimachineryPkgApisMetaV1WatchEvent watchSecurityOpenshiftIoV1SecurityContextConstraints(name, opts)



watch changes to an object of kind SecurityContextConstraints

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

let apiInstance = new OpenShiftApiWithKubernetes.SecurityOpenshiftIoV1Api();

let name = "name_example"; // String | name of the SecurityContextConstraints

let opts = { 
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.watchSecurityOpenshiftIoV1SecurityContextConstraints(name, opts, (error, data, response) => {
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
 **name** | **String**| name of the SecurityContextConstraints | 
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

<a name="watchSecurityOpenshiftIoV1SecurityContextConstraintsList"></a>
# **watchSecurityOpenshiftIoV1SecurityContextConstraintsList**
> IoK8sApimachineryPkgApisMetaV1WatchEvent watchSecurityOpenshiftIoV1SecurityContextConstraintsList(opts)



watch individual changes to a list of SecurityContextConstraints

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

let apiInstance = new OpenShiftApiWithKubernetes.SecurityOpenshiftIoV1Api();

let opts = { 
  'fieldSelector': "fieldSelector_example", // String | A selector to restrict the list of returned objects by their fields. Defaults to everything.
  'labelSelector': "labelSelector_example", // String | A selector to restrict the list of returned objects by their labels. Defaults to everything.
  'pretty': "pretty_example", // String | If 'true', then the output is pretty printed.
  'resourceVersion': "resourceVersion_example", // String | When specified with a watch call, shows changes that occur after that particular version of a resource. Defaults to changes from the beginning of history. When specified for list: - if unset, then the result is returned from remote storage based on quorum-read flag; - if it's 0, then we simply return what we currently have in cache, no guarantee; - if set to non zero, then the result is at least as fresh as given rv.
  'timeoutSeconds': 56, // Number | Timeout for the list/watch call.
  'watch': true // Boolean | Watch for changes to the described resources and return them as a stream of add, update, and remove notifications. Specify resourceVersion.
};

apiInstance.watchSecurityOpenshiftIoV1SecurityContextConstraintsList(opts, (error, data, response) => {
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

