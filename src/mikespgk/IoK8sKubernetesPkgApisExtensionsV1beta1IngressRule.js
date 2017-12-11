/**
 * OpenShift API (with Kubernetes)
 * OpenShift provides builds, application lifecycle, image content management, and administrative policy on top of Kubernetes. The API allows consistent management of those objects.  All API operations are authenticated via an Authorization bearer token that is provided for service accounts as a generated secret (in JWT form) or via the native OAuth endpoint located at /oauth/authorize. Core infrastructure components may use client certificates that require no authentication.  All API operations return a 'resourceVersion' string that represents the version of the object in the underlying storage. The standard LIST operation performs a snapshot read of the underlying objects, returning a resourceVersion representing a consistent version of the listed objects. The WATCH operation allows all updates to a set of objects after the provided resourceVersion to be observed by a client. By listing and beginning a watch from the returned resourceVersion, clients may observe a consistent view of the state of one or more objects. Note that WATCH always returns the update after the provided resourceVersion. Watch may be extended a limited time in the past - using etcd 2 the watch window is 1000 events (which on a large cluster may only be a few tens of seconds) so clients must explicitly handle the \"watch to old error\" by re-listing.  Objects are divided into two rough categories - those that have a lifecycle and must reflect the state of the cluster, and those that have no state. Objects with lifecycle typically have three main sections:  * 'metadata' common to all objects * a 'spec' that represents the desired state * a 'status' that represents how much of the desired state is reflected on   the cluster at the current time  Objects that have no state have 'metadata' but may lack a 'spec' or 'status' section.  Objects are divided into those that are namespace scoped (only exist inside of a namespace) and those that are cluster scoped (exist outside of a namespace). A namespace scoped resource will be deleted when the namespace is deleted and cannot be created if the namespace has not yet been created or is in the process of deletion. Cluster scoped resources are typically only accessible to admins - resources like nodes, persistent volumes, and cluster policy.  All objects have a schema that is a combination of the 'kind' and 'apiVersion' fields. This schema is additive only for any given version - no backwards incompatible changes are allowed without incrementing the apiVersion. The server will return and accept a number of standard responses that share a common schema - for instance, the common error type is 'metav1.Status' (described below) and will be returned on any error from the API server.  The API is available in multiple serialization formats - the default is JSON (Accept: application/json and Content-Type: application/json) but clients may also use YAML (application/yaml) or the native Protobuf schema (application/vnd.kubernetes.protobuf). Note that the format of the WATCH API call is slightly different - for JSON it returns newline delimited objects while for Protobuf it returns length-delimited frames (4 bytes in network-order) that contain a 'versioned.Watch' Protobuf object.  See the OpenShift documentation at https://docs.openshift.org for more information. 
 *
 * OpenAPI spec version: v3.6.173.0.21
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import IoK8sKubernetesPkgApisExtensionsV1beta1HTTPIngressRuleValue from './IoK8sKubernetesPkgApisExtensionsV1beta1HTTPIngressRuleValue';





/**
* The IoK8sKubernetesPkgApisExtensionsV1beta1IngressRule model module.
* @module mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1IngressRule
* @version v3.6.173.0.21
*/
export default class IoK8sKubernetesPkgApisExtensionsV1beta1IngressRule {
    /**
    * Constructs a new <code>IoK8sKubernetesPkgApisExtensionsV1beta1IngressRule</code>.
    * IngressRule represents the rules mapping the paths under a specified host to the related backend services. Incoming requests are first evaluated for a host match, then routed to the backend associated with the matching IngressRuleValue.
    * @alias module:mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1IngressRule
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>IoK8sKubernetesPkgApisExtensionsV1beta1IngressRule</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1IngressRule} obj Optional instance to populate.
    * @return {module:mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1IngressRule} The populated <code>IoK8sKubernetesPkgApisExtensionsV1beta1IngressRule</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sKubernetesPkgApisExtensionsV1beta1IngressRule();

            
            
            

            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('http')) {
                obj['http'] = IoK8sKubernetesPkgApisExtensionsV1beta1HTTPIngressRuleValue.constructFromObject(data['http']);
            }
        }
        return obj;
    }

    /**
    * Host is the fully qualified domain name of a network host, as defined by RFC 3986. Note the following deviations from the \"host\" part of the URI as defined in the RFC: 1. IPs are not allowed. Currently an IngressRuleValue can only apply to the    IP in the Spec of the parent Ingress. 2. The `:` delimiter is not respected because ports are not allowed.    Currently the port of an Ingress is implicitly :80 for http and    :443 for https. Both these may change in the future. Incoming requests are matched against the host before the IngressRuleValue. If the host is unspecified, the Ingress routes all traffic based on the specified IngressRuleValue.
    * @member {String} host
    */
    host = undefined;
    /**
    * @member {module:mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1HTTPIngressRuleValue} http
    */
    http = undefined;








}


