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
import IoK8sKubernetesPkgApisExtensionsV1beta1FSGroupStrategyOptions from './IoK8sKubernetesPkgApisExtensionsV1beta1FSGroupStrategyOptions';
import IoK8sKubernetesPkgApisExtensionsV1beta1HostPortRange from './IoK8sKubernetesPkgApisExtensionsV1beta1HostPortRange';
import IoK8sKubernetesPkgApisExtensionsV1beta1RunAsUserStrategyOptions from './IoK8sKubernetesPkgApisExtensionsV1beta1RunAsUserStrategyOptions';
import IoK8sKubernetesPkgApisExtensionsV1beta1SELinuxStrategyOptions from './IoK8sKubernetesPkgApisExtensionsV1beta1SELinuxStrategyOptions';
import IoK8sKubernetesPkgApisExtensionsV1beta1SupplementalGroupsStrategyOptions from './IoK8sKubernetesPkgApisExtensionsV1beta1SupplementalGroupsStrategyOptions';





/**
* The IoK8sKubernetesPkgApisExtensionsV1beta1PodSecurityPolicySpec model module.
* @module mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1PodSecurityPolicySpec
* @version v3.6.173.0.21
*/
export default class IoK8sKubernetesPkgApisExtensionsV1beta1PodSecurityPolicySpec {
    /**
    * Constructs a new <code>IoK8sKubernetesPkgApisExtensionsV1beta1PodSecurityPolicySpec</code>.
    * Pod Security Policy Spec defines the policy enforced.
    * @alias module:mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1PodSecurityPolicySpec
    * @class
    * @param fsGroup {module:mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1FSGroupStrategyOptions} FSGroup is the strategy that will dictate what fs group is used by the SecurityContext.
    * @param runAsUser {module:mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1RunAsUserStrategyOptions} runAsUser is the strategy that will dictate the allowable RunAsUser values that may be set.
    * @param seLinux {module:mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1SELinuxStrategyOptions} seLinux is the strategy that will dictate the allowable labels that may be set.
    * @param supplementalGroups {module:mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1SupplementalGroupsStrategyOptions} SupplementalGroups is the strategy that will dictate what supplemental groups are used by the SecurityContext.
    */

    constructor(fsGroup, runAsUser, seLinux, supplementalGroups) {
        

        
        

        this['fsGroup'] = fsGroup;this['runAsUser'] = runAsUser;this['seLinux'] = seLinux;this['supplementalGroups'] = supplementalGroups;

        
    }

    /**
    * Constructs a <code>IoK8sKubernetesPkgApisExtensionsV1beta1PodSecurityPolicySpec</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1PodSecurityPolicySpec} obj Optional instance to populate.
    * @return {module:mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1PodSecurityPolicySpec} The populated <code>IoK8sKubernetesPkgApisExtensionsV1beta1PodSecurityPolicySpec</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new IoK8sKubernetesPkgApisExtensionsV1beta1PodSecurityPolicySpec();

            
            
            

            if (data.hasOwnProperty('allowedCapabilities')) {
                obj['allowedCapabilities'] = ApiClient.convertToType(data['allowedCapabilities'], ['String']);
            }
            if (data.hasOwnProperty('defaultAddCapabilities')) {
                obj['defaultAddCapabilities'] = ApiClient.convertToType(data['defaultAddCapabilities'], ['String']);
            }
            if (data.hasOwnProperty('fsGroup')) {
                obj['fsGroup'] = IoK8sKubernetesPkgApisExtensionsV1beta1FSGroupStrategyOptions.constructFromObject(data['fsGroup']);
            }
            if (data.hasOwnProperty('hostIPC')) {
                obj['hostIPC'] = ApiClient.convertToType(data['hostIPC'], 'Boolean');
            }
            if (data.hasOwnProperty('hostNetwork')) {
                obj['hostNetwork'] = ApiClient.convertToType(data['hostNetwork'], 'Boolean');
            }
            if (data.hasOwnProperty('hostPID')) {
                obj['hostPID'] = ApiClient.convertToType(data['hostPID'], 'Boolean');
            }
            if (data.hasOwnProperty('hostPorts')) {
                obj['hostPorts'] = ApiClient.convertToType(data['hostPorts'], [IoK8sKubernetesPkgApisExtensionsV1beta1HostPortRange]);
            }
            if (data.hasOwnProperty('privileged')) {
                obj['privileged'] = ApiClient.convertToType(data['privileged'], 'Boolean');
            }
            if (data.hasOwnProperty('readOnlyRootFilesystem')) {
                obj['readOnlyRootFilesystem'] = ApiClient.convertToType(data['readOnlyRootFilesystem'], 'Boolean');
            }
            if (data.hasOwnProperty('requiredDropCapabilities')) {
                obj['requiredDropCapabilities'] = ApiClient.convertToType(data['requiredDropCapabilities'], ['String']);
            }
            if (data.hasOwnProperty('runAsUser')) {
                obj['runAsUser'] = IoK8sKubernetesPkgApisExtensionsV1beta1RunAsUserStrategyOptions.constructFromObject(data['runAsUser']);
            }
            if (data.hasOwnProperty('seLinux')) {
                obj['seLinux'] = IoK8sKubernetesPkgApisExtensionsV1beta1SELinuxStrategyOptions.constructFromObject(data['seLinux']);
            }
            if (data.hasOwnProperty('supplementalGroups')) {
                obj['supplementalGroups'] = IoK8sKubernetesPkgApisExtensionsV1beta1SupplementalGroupsStrategyOptions.constructFromObject(data['supplementalGroups']);
            }
            if (data.hasOwnProperty('volumes')) {
                obj['volumes'] = ApiClient.convertToType(data['volumes'], ['String']);
            }
        }
        return obj;
    }

    /**
    * AllowedCapabilities is a list of capabilities that can be requested to add to the container. Capabilities in this field may be added at the pod author's discretion. You must not list a capability in both AllowedCapabilities and RequiredDropCapabilities.
    * @member {Array.<String>} allowedCapabilities
    */
    allowedCapabilities = undefined;
    /**
    * DefaultAddCapabilities is the default set of capabilities that will be added to the container unless the pod spec specifically drops the capability.  You may not list a capabiility in both DefaultAddCapabilities and RequiredDropCapabilities.
    * @member {Array.<String>} defaultAddCapabilities
    */
    defaultAddCapabilities = undefined;
    /**
    * FSGroup is the strategy that will dictate what fs group is used by the SecurityContext.
    * @member {module:mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1FSGroupStrategyOptions} fsGroup
    */
    fsGroup = undefined;
    /**
    * hostIPC determines if the policy allows the use of HostIPC in the pod spec.
    * @member {Boolean} hostIPC
    */
    hostIPC = undefined;
    /**
    * hostNetwork determines if the policy allows the use of HostNetwork in the pod spec.
    * @member {Boolean} hostNetwork
    */
    hostNetwork = undefined;
    /**
    * hostPID determines if the policy allows the use of HostPID in the pod spec.
    * @member {Boolean} hostPID
    */
    hostPID = undefined;
    /**
    * hostPorts determines which host port ranges are allowed to be exposed.
    * @member {Array.<module:mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1HostPortRange>} hostPorts
    */
    hostPorts = undefined;
    /**
    * privileged determines if a pod can request to be run as privileged.
    * @member {Boolean} privileged
    */
    privileged = undefined;
    /**
    * ReadOnlyRootFilesystem when set to true will force containers to run with a read only root file system.  If the container specifically requests to run with a non-read only root file system the PSP should deny the pod. If set to false the container may run with a read only root file system if it wishes but it will not be forced to.
    * @member {Boolean} readOnlyRootFilesystem
    */
    readOnlyRootFilesystem = undefined;
    /**
    * RequiredDropCapabilities are the capabilities that will be dropped from the container.  These are required to be dropped and cannot be added.
    * @member {Array.<String>} requiredDropCapabilities
    */
    requiredDropCapabilities = undefined;
    /**
    * runAsUser is the strategy that will dictate the allowable RunAsUser values that may be set.
    * @member {module:mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1RunAsUserStrategyOptions} runAsUser
    */
    runAsUser = undefined;
    /**
    * seLinux is the strategy that will dictate the allowable labels that may be set.
    * @member {module:mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1SELinuxStrategyOptions} seLinux
    */
    seLinux = undefined;
    /**
    * SupplementalGroups is the strategy that will dictate what supplemental groups are used by the SecurityContext.
    * @member {module:mikespgk/IoK8sKubernetesPkgApisExtensionsV1beta1SupplementalGroupsStrategyOptions} supplementalGroups
    */
    supplementalGroups = undefined;
    /**
    * volumes is a white list of allowed volume plugins.  Empty indicates that all plugins may be used.
    * @member {Array.<String>} volumes
    */
    volumes = undefined;








}

