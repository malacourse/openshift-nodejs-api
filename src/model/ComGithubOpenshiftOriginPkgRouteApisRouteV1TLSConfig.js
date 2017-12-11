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





/**
* The ComGithubOpenshiftOriginPkgRouteApisRouteV1TLSConfig model module.
* @module model/ComGithubOpenshiftOriginPkgRouteApisRouteV1TLSConfig
* @version v3.6.173.0.21
*/
export default class ComGithubOpenshiftOriginPkgRouteApisRouteV1TLSConfig {
    /**
    * Constructs a new <code>ComGithubOpenshiftOriginPkgRouteApisRouteV1TLSConfig</code>.
    * TLSConfig defines config used to secure a route and provide termination
    * @alias module:model/ComGithubOpenshiftOriginPkgRouteApisRouteV1TLSConfig
    * @class
    * @param termination {String} termination indicates termination type.
    */

    constructor(termination) {
        

        
        

        this['termination'] = termination;

        
    }

    /**
    * Constructs a <code>ComGithubOpenshiftOriginPkgRouteApisRouteV1TLSConfig</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ComGithubOpenshiftOriginPkgRouteApisRouteV1TLSConfig} obj Optional instance to populate.
    * @return {module:model/ComGithubOpenshiftOriginPkgRouteApisRouteV1TLSConfig} The populated <code>ComGithubOpenshiftOriginPkgRouteApisRouteV1TLSConfig</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ComGithubOpenshiftOriginPkgRouteApisRouteV1TLSConfig();

            
            
            

            if (data.hasOwnProperty('caCertificate')) {
                obj['caCertificate'] = ApiClient.convertToType(data['caCertificate'], 'String');
            }
            if (data.hasOwnProperty('certificate')) {
                obj['certificate'] = ApiClient.convertToType(data['certificate'], 'String');
            }
            if (data.hasOwnProperty('destinationCACertificate')) {
                obj['destinationCACertificate'] = ApiClient.convertToType(data['destinationCACertificate'], 'String');
            }
            if (data.hasOwnProperty('insecureEdgeTerminationPolicy')) {
                obj['insecureEdgeTerminationPolicy'] = ApiClient.convertToType(data['insecureEdgeTerminationPolicy'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('termination')) {
                obj['termination'] = ApiClient.convertToType(data['termination'], 'String');
            }
        }
        return obj;
    }

    /**
    * caCertificate provides the cert authority certificate contents
    * @member {String} caCertificate
    */
    caCertificate = undefined;
    /**
    * certificate provides certificate contents
    * @member {String} certificate
    */
    certificate = undefined;
    /**
    * destinationCACertificate provides the contents of the ca certificate of the final destination.  When using reencrypt termination this file should be provided in order to have routers use it for health checks on the secure connection. If this field is not specified, the router may provide its own destination CA and perform hostname validation using the short service name (service.namespace.svc), which allows infrastructure generated certificates to automatically verify.
    * @member {String} destinationCACertificate
    */
    destinationCACertificate = undefined;
    /**
    * insecureEdgeTerminationPolicy indicates the desired behavior for insecure connections to a route. While each router may make its own decisions on which ports to expose, this is normally port 80.  * Allow - traffic is sent to the server on the insecure port (default) * Disable - no traffic is allowed on the insecure port. * Redirect - clients are redirected to the secure port.
    * @member {String} insecureEdgeTerminationPolicy
    */
    insecureEdgeTerminationPolicy = undefined;
    /**
    * key provides key file contents
    * @member {String} key
    */
    key = undefined;
    /**
    * termination indicates termination type.
    * @member {String} termination
    */
    termination = undefined;








}

