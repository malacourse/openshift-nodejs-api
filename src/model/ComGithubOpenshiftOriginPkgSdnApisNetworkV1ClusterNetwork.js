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
import IoK8sApimachineryPkgApisMetaV1ObjectMeta from './IoK8sApimachineryPkgApisMetaV1ObjectMeta';





/**
* The ComGithubOpenshiftOriginPkgSdnApisNetworkV1ClusterNetwork model module.
* @module model/ComGithubOpenshiftOriginPkgSdnApisNetworkV1ClusterNetwork
* @version v3.6.173.0.21
*/
export default class ComGithubOpenshiftOriginPkgSdnApisNetworkV1ClusterNetwork {
    /**
    * Constructs a new <code>ComGithubOpenshiftOriginPkgSdnApisNetworkV1ClusterNetwork</code>.
    * ClusterNetwork describes the cluster network. There is normally only one object of this type, named \&quot;default\&quot;, which is created by the SDN network plugin based on the master configuration when the cluster is brought up for the first time.
    * @alias module:model/ComGithubOpenshiftOriginPkgSdnApisNetworkV1ClusterNetwork
    * @class
    * @param hostsubnetlength {Number} HostSubnetLength is the number of bits of network to allocate to each node. eg, 8 would mean that each node would have a /24 slice of the overlay network for its pods
    * @param network {String} Network is a CIDR string specifying the global overlay network's L3 space
    * @param serviceNetwork {String} ServiceNetwork is the CIDR range that Service IP addresses are allocated from
    */

    constructor(hostsubnetlength, network, serviceNetwork) {
        

        
        

        this['hostsubnetlength'] = hostsubnetlength;this['network'] = network;this['serviceNetwork'] = serviceNetwork;

        
    }

    /**
    * Constructs a <code>ComGithubOpenshiftOriginPkgSdnApisNetworkV1ClusterNetwork</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ComGithubOpenshiftOriginPkgSdnApisNetworkV1ClusterNetwork} obj Optional instance to populate.
    * @return {module:model/ComGithubOpenshiftOriginPkgSdnApisNetworkV1ClusterNetwork} The populated <code>ComGithubOpenshiftOriginPkgSdnApisNetworkV1ClusterNetwork</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ComGithubOpenshiftOriginPkgSdnApisNetworkV1ClusterNetwork();

            
            
            

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('hostsubnetlength')) {
                obj['hostsubnetlength'] = ApiClient.convertToType(data['hostsubnetlength'], 'Number');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = IoK8sApimachineryPkgApisMetaV1ObjectMeta.constructFromObject(data['metadata']);
            }
            if (data.hasOwnProperty('network')) {
                obj['network'] = ApiClient.convertToType(data['network'], 'String');
            }
            if (data.hasOwnProperty('pluginName')) {
                obj['pluginName'] = ApiClient.convertToType(data['pluginName'], 'String');
            }
            if (data.hasOwnProperty('serviceNetwork')) {
                obj['serviceNetwork'] = ApiClient.convertToType(data['serviceNetwork'], 'String');
            }
        }
        return obj;
    }

    /**
    * APIVersion defines the versioned schema of this representation of an object. Servers should convert recognized schemas to the latest internal value, and may reject unrecognized values. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#resources
    * @member {String} apiVersion
    */
    apiVersion = undefined;
    /**
    * HostSubnetLength is the number of bits of network to allocate to each node. eg, 8 would mean that each node would have a /24 slice of the overlay network for its pods
    * @member {Number} hostsubnetlength
    */
    hostsubnetlength = undefined;
    /**
    * Kind is a string value representing the REST resource this object represents. Servers may infer this from the endpoint the client submits requests to. Cannot be updated. In CamelCase. More info: http://releases.k8s.io/HEAD/docs/devel/api-conventions.md#types-kinds
    * @member {String} kind
    */
    kind = undefined;
    /**
    * Standard object's metadata.
    * @member {module:model/IoK8sApimachineryPkgApisMetaV1ObjectMeta} metadata
    */
    metadata = undefined;
    /**
    * Network is a CIDR string specifying the global overlay network's L3 space
    * @member {String} network
    */
    network = undefined;
    /**
    * PluginName is the name of the network plugin being used
    * @member {String} pluginName
    */
    pluginName = undefined;
    /**
    * ServiceNetwork is the CIDR range that Service IP addresses are allocated from
    * @member {String} serviceNetwork
    */
    serviceNetwork = undefined;








}

