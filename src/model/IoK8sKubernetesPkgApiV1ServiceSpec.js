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
import IoK8sKubernetesPkgApiV1ServicePort from './IoK8sKubernetesPkgApiV1ServicePort';





/**
* The IoK8sKubernetesPkgApiV1ServiceSpec model module.
* @module model/IoK8sKubernetesPkgApiV1ServiceSpec
* @version v3.6.173.0.21
*/
export default class IoK8sKubernetesPkgApiV1ServiceSpec {
    /**
    * Constructs a new <code>IoK8sKubernetesPkgApiV1ServiceSpec</code>.
    * ServiceSpec describes the attributes that a user creates on a service.
    * @alias module:model/IoK8sKubernetesPkgApiV1ServiceSpec
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>IoK8sKubernetesPkgApiV1ServiceSpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/IoK8sKubernetesPkgApiV1ServiceSpec} obj Optional instance to populate.
    * @return {module:model/IoK8sKubernetesPkgApiV1ServiceSpec} The populated <code>IoK8sKubernetesPkgApiV1ServiceSpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sKubernetesPkgApiV1ServiceSpec();

            
            
            

            if (data.hasOwnProperty('clusterIP')) {
                obj['clusterIP'] = ApiClient.convertToType(data['clusterIP'], 'String');
            }
            if (data.hasOwnProperty('deprecatedPublicIPs')) {
                obj['deprecatedPublicIPs'] = ApiClient.convertToType(data['deprecatedPublicIPs'], ['String']);
            }
            if (data.hasOwnProperty('externalIPs')) {
                obj['externalIPs'] = ApiClient.convertToType(data['externalIPs'], ['String']);
            }
            if (data.hasOwnProperty('externalName')) {
                obj['externalName'] = ApiClient.convertToType(data['externalName'], 'String');
            }
            if (data.hasOwnProperty('loadBalancerIP')) {
                obj['loadBalancerIP'] = ApiClient.convertToType(data['loadBalancerIP'], 'String');
            }
            if (data.hasOwnProperty('loadBalancerSourceRanges')) {
                obj['loadBalancerSourceRanges'] = ApiClient.convertToType(data['loadBalancerSourceRanges'], ['String']);
            }
            if (data.hasOwnProperty('ports')) {
                obj['ports'] = ApiClient.convertToType(data['ports'], [IoK8sKubernetesPkgApiV1ServicePort]);
            }
            if (data.hasOwnProperty('selector')) {
                obj['selector'] = ApiClient.convertToType(data['selector'], {'String': 'String'});
            }
            if (data.hasOwnProperty('sessionAffinity')) {
                obj['sessionAffinity'] = ApiClient.convertToType(data['sessionAffinity'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }

    /**
    * clusterIP is the IP address of the service and is usually assigned randomly by the master. If an address is specified manually and is not in use by others, it will be allocated to the service; otherwise, creation of the service will fail. This field can not be changed through updates. Valid values are \"None\", empty string (\"\"), or a valid IP address. \"None\" can be specified for headless services when proxying is not required. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: http://kubernetes.io/docs/user-guide/services#virtual-ips-and-service-proxies
    * @member {String} clusterIP
    */
    clusterIP = undefined;
    /**
    * deprecatedPublicIPs is deprecated and replaced by the externalIPs field with almost the exact same semantics.  This field is retained in the v1 API for compatibility until at least 8/20/2016.  It will be removed from any new API revisions.  If both deprecatedPublicIPs *and* externalIPs are set, deprecatedPublicIPs is used.
    * @member {Array.<String>} deprecatedPublicIPs
    */
    deprecatedPublicIPs = undefined;
    /**
    * externalIPs is a list of IP addresses for which nodes in the cluster will also accept traffic for this service.  These IPs are not managed by Kubernetes.  The user is responsible for ensuring that traffic arrives at a node with this IP.  A common example is external load-balancers that are not part of the Kubernetes system.  A previous form of this functionality exists as the deprecatedPublicIPs field.  When using this field, callers should also clear the deprecatedPublicIPs field.
    * @member {Array.<String>} externalIPs
    */
    externalIPs = undefined;
    /**
    * externalName is the external reference that kubedns or equivalent will return as a CNAME record for this service. No proxying will be involved. Must be a valid DNS name and requires Type to be ExternalName.
    * @member {String} externalName
    */
    externalName = undefined;
    /**
    * Only applies to Service Type: LoadBalancer LoadBalancer will get created with the IP specified in this field. This feature depends on whether the underlying cloud-provider supports specifying the loadBalancerIP when a load balancer is created. This field will be ignored if the cloud-provider does not support the feature.
    * @member {String} loadBalancerIP
    */
    loadBalancerIP = undefined;
    /**
    * If specified and supported by the platform, this will restrict traffic through the cloud-provider load-balancer will be restricted to the specified client IPs. This field will be ignored if the cloud-provider does not support the feature.\" More info: http://kubernetes.io/docs/user-guide/services-firewalls
    * @member {Array.<String>} loadBalancerSourceRanges
    */
    loadBalancerSourceRanges = undefined;
    /**
    * The list of ports that are exposed by this service. More info: http://kubernetes.io/docs/user-guide/services#virtual-ips-and-service-proxies
    * @member {Array.<module:model/IoK8sKubernetesPkgApiV1ServicePort>} ports
    */
    ports = undefined;
    /**
    * Route service traffic to pods with label keys and values matching this selector. If empty or not present, the service is assumed to have an external process managing its endpoints, which Kubernetes will not modify. Only applies to types ClusterIP, NodePort, and LoadBalancer. Ignored if type is ExternalName. More info: http://kubernetes.io/docs/user-guide/services#overview
    * @member {Object.<String, String>} selector
    */
    selector = undefined;
    /**
    * Supports \"ClientIP\" and \"None\". Used to maintain session affinity. Enable client IP based session affinity. Must be ClientIP or None. Defaults to None. More info: http://kubernetes.io/docs/user-guide/services#virtual-ips-and-service-proxies
    * @member {String} sessionAffinity
    */
    sessionAffinity = undefined;
    /**
    * type determines how the Service is exposed. Defaults to ClusterIP. Valid options are ExternalName, ClusterIP, NodePort, and LoadBalancer. \"ExternalName\" maps to the specified externalName. \"ClusterIP\" allocates a cluster-internal IP address for load-balancing to endpoints. Endpoints are determined by the selector or if that is not specified, by manual construction of an Endpoints object. If clusterIP is \"None\", no virtual IP is allocated and the endpoints are published as a set of endpoints rather than a stable IP. \"NodePort\" builds on ClusterIP and allocates a port on every node which routes to the clusterIP. \"LoadBalancer\" builds on NodePort and creates an external load-balancer (if supported in the current cloud) which routes to the clusterIP. More info: http://kubernetes.io/docs/user-guide/services#overview
    * @member {String} type
    */
    type = undefined;








}


