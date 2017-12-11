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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.OpenShiftApiWithKubernetes);
  }
}(this, function(expect, OpenShiftApiWithKubernetes) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new OpenShiftApiWithKubernetes.NetworkOpenshiftIoV1Api();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('NetworkOpenshiftIoV1Api', function() {
    describe('createNetworkOpenshiftIoV1ClusterNetwork', function() {
      it('should call createNetworkOpenshiftIoV1ClusterNetwork successfully', function(done) {
        //uncomment below and update the code to test createNetworkOpenshiftIoV1ClusterNetwork
        //instance.createNetworkOpenshiftIoV1ClusterNetwork(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createNetworkOpenshiftIoV1EgressNetworkPolicyForAllNamespaces', function() {
      it('should call createNetworkOpenshiftIoV1EgressNetworkPolicyForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test createNetworkOpenshiftIoV1EgressNetworkPolicyForAllNamespaces
        //instance.createNetworkOpenshiftIoV1EgressNetworkPolicyForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createNetworkOpenshiftIoV1HostSubnet', function() {
      it('should call createNetworkOpenshiftIoV1HostSubnet successfully', function(done) {
        //uncomment below and update the code to test createNetworkOpenshiftIoV1HostSubnet
        //instance.createNetworkOpenshiftIoV1HostSubnet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy', function() {
      it('should call createNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy successfully', function(done) {
        //uncomment below and update the code to test createNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy
        //instance.createNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createNetworkOpenshiftIoV1NetNamespace', function() {
      it('should call createNetworkOpenshiftIoV1NetNamespace successfully', function(done) {
        //uncomment below and update the code to test createNetworkOpenshiftIoV1NetNamespace
        //instance.createNetworkOpenshiftIoV1NetNamespace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNetworkOpenshiftIoV1ClusterNetwork', function() {
      it('should call deleteNetworkOpenshiftIoV1ClusterNetwork successfully', function(done) {
        //uncomment below and update the code to test deleteNetworkOpenshiftIoV1ClusterNetwork
        //instance.deleteNetworkOpenshiftIoV1ClusterNetwork(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNetworkOpenshiftIoV1CollectionClusterNetwork', function() {
      it('should call deleteNetworkOpenshiftIoV1CollectionClusterNetwork successfully', function(done) {
        //uncomment below and update the code to test deleteNetworkOpenshiftIoV1CollectionClusterNetwork
        //instance.deleteNetworkOpenshiftIoV1CollectionClusterNetwork(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNetworkOpenshiftIoV1CollectionHostSubnet', function() {
      it('should call deleteNetworkOpenshiftIoV1CollectionHostSubnet successfully', function(done) {
        //uncomment below and update the code to test deleteNetworkOpenshiftIoV1CollectionHostSubnet
        //instance.deleteNetworkOpenshiftIoV1CollectionHostSubnet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNetworkOpenshiftIoV1CollectionNamespacedEgressNetworkPolicy', function() {
      it('should call deleteNetworkOpenshiftIoV1CollectionNamespacedEgressNetworkPolicy successfully', function(done) {
        //uncomment below and update the code to test deleteNetworkOpenshiftIoV1CollectionNamespacedEgressNetworkPolicy
        //instance.deleteNetworkOpenshiftIoV1CollectionNamespacedEgressNetworkPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNetworkOpenshiftIoV1CollectionNetNamespace', function() {
      it('should call deleteNetworkOpenshiftIoV1CollectionNetNamespace successfully', function(done) {
        //uncomment below and update the code to test deleteNetworkOpenshiftIoV1CollectionNetNamespace
        //instance.deleteNetworkOpenshiftIoV1CollectionNetNamespace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNetworkOpenshiftIoV1HostSubnet', function() {
      it('should call deleteNetworkOpenshiftIoV1HostSubnet successfully', function(done) {
        //uncomment below and update the code to test deleteNetworkOpenshiftIoV1HostSubnet
        //instance.deleteNetworkOpenshiftIoV1HostSubnet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy', function() {
      it('should call deleteNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy successfully', function(done) {
        //uncomment below and update the code to test deleteNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy
        //instance.deleteNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteNetworkOpenshiftIoV1NetNamespace', function() {
      it('should call deleteNetworkOpenshiftIoV1NetNamespace successfully', function(done) {
        //uncomment below and update the code to test deleteNetworkOpenshiftIoV1NetNamespace
        //instance.deleteNetworkOpenshiftIoV1NetNamespace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNetworkOpenshiftIoV1APIResources', function() {
      it('should call getNetworkOpenshiftIoV1APIResources successfully', function(done) {
        //uncomment below and update the code to test getNetworkOpenshiftIoV1APIResources
        //instance.getNetworkOpenshiftIoV1APIResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listNetworkOpenshiftIoV1ClusterNetwork', function() {
      it('should call listNetworkOpenshiftIoV1ClusterNetwork successfully', function(done) {
        //uncomment below and update the code to test listNetworkOpenshiftIoV1ClusterNetwork
        //instance.listNetworkOpenshiftIoV1ClusterNetwork(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listNetworkOpenshiftIoV1EgressNetworkPolicyForAllNamespaces', function() {
      it('should call listNetworkOpenshiftIoV1EgressNetworkPolicyForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listNetworkOpenshiftIoV1EgressNetworkPolicyForAllNamespaces
        //instance.listNetworkOpenshiftIoV1EgressNetworkPolicyForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listNetworkOpenshiftIoV1HostSubnet', function() {
      it('should call listNetworkOpenshiftIoV1HostSubnet successfully', function(done) {
        //uncomment below and update the code to test listNetworkOpenshiftIoV1HostSubnet
        //instance.listNetworkOpenshiftIoV1HostSubnet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy', function() {
      it('should call listNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy successfully', function(done) {
        //uncomment below and update the code to test listNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy
        //instance.listNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listNetworkOpenshiftIoV1NetNamespace', function() {
      it('should call listNetworkOpenshiftIoV1NetNamespace successfully', function(done) {
        //uncomment below and update the code to test listNetworkOpenshiftIoV1NetNamespace
        //instance.listNetworkOpenshiftIoV1NetNamespace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNetworkOpenshiftIoV1ClusterNetwork', function() {
      it('should call patchNetworkOpenshiftIoV1ClusterNetwork successfully', function(done) {
        //uncomment below and update the code to test patchNetworkOpenshiftIoV1ClusterNetwork
        //instance.patchNetworkOpenshiftIoV1ClusterNetwork(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNetworkOpenshiftIoV1HostSubnet', function() {
      it('should call patchNetworkOpenshiftIoV1HostSubnet successfully', function(done) {
        //uncomment below and update the code to test patchNetworkOpenshiftIoV1HostSubnet
        //instance.patchNetworkOpenshiftIoV1HostSubnet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy', function() {
      it('should call patchNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy successfully', function(done) {
        //uncomment below and update the code to test patchNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy
        //instance.patchNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchNetworkOpenshiftIoV1NetNamespace', function() {
      it('should call patchNetworkOpenshiftIoV1NetNamespace successfully', function(done) {
        //uncomment below and update the code to test patchNetworkOpenshiftIoV1NetNamespace
        //instance.patchNetworkOpenshiftIoV1NetNamespace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNetworkOpenshiftIoV1ClusterNetwork', function() {
      it('should call readNetworkOpenshiftIoV1ClusterNetwork successfully', function(done) {
        //uncomment below and update the code to test readNetworkOpenshiftIoV1ClusterNetwork
        //instance.readNetworkOpenshiftIoV1ClusterNetwork(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNetworkOpenshiftIoV1HostSubnet', function() {
      it('should call readNetworkOpenshiftIoV1HostSubnet successfully', function(done) {
        //uncomment below and update the code to test readNetworkOpenshiftIoV1HostSubnet
        //instance.readNetworkOpenshiftIoV1HostSubnet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy', function() {
      it('should call readNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy successfully', function(done) {
        //uncomment below and update the code to test readNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy
        //instance.readNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readNetworkOpenshiftIoV1NetNamespace', function() {
      it('should call readNetworkOpenshiftIoV1NetNamespace successfully', function(done) {
        //uncomment below and update the code to test readNetworkOpenshiftIoV1NetNamespace
        //instance.readNetworkOpenshiftIoV1NetNamespace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNetworkOpenshiftIoV1ClusterNetwork', function() {
      it('should call replaceNetworkOpenshiftIoV1ClusterNetwork successfully', function(done) {
        //uncomment below and update the code to test replaceNetworkOpenshiftIoV1ClusterNetwork
        //instance.replaceNetworkOpenshiftIoV1ClusterNetwork(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNetworkOpenshiftIoV1HostSubnet', function() {
      it('should call replaceNetworkOpenshiftIoV1HostSubnet successfully', function(done) {
        //uncomment below and update the code to test replaceNetworkOpenshiftIoV1HostSubnet
        //instance.replaceNetworkOpenshiftIoV1HostSubnet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy', function() {
      it('should call replaceNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy successfully', function(done) {
        //uncomment below and update the code to test replaceNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy
        //instance.replaceNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceNetworkOpenshiftIoV1NetNamespace', function() {
      it('should call replaceNetworkOpenshiftIoV1NetNamespace successfully', function(done) {
        //uncomment below and update the code to test replaceNetworkOpenshiftIoV1NetNamespace
        //instance.replaceNetworkOpenshiftIoV1NetNamespace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchNetworkOpenshiftIoV1ClusterNetwork', function() {
      it('should call watchNetworkOpenshiftIoV1ClusterNetwork successfully', function(done) {
        //uncomment below and update the code to test watchNetworkOpenshiftIoV1ClusterNetwork
        //instance.watchNetworkOpenshiftIoV1ClusterNetwork(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchNetworkOpenshiftIoV1ClusterNetworkList', function() {
      it('should call watchNetworkOpenshiftIoV1ClusterNetworkList successfully', function(done) {
        //uncomment below and update the code to test watchNetworkOpenshiftIoV1ClusterNetworkList
        //instance.watchNetworkOpenshiftIoV1ClusterNetworkList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchNetworkOpenshiftIoV1EgressNetworkPolicyListForAllNamespaces', function() {
      it('should call watchNetworkOpenshiftIoV1EgressNetworkPolicyListForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test watchNetworkOpenshiftIoV1EgressNetworkPolicyListForAllNamespaces
        //instance.watchNetworkOpenshiftIoV1EgressNetworkPolicyListForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchNetworkOpenshiftIoV1HostSubnet', function() {
      it('should call watchNetworkOpenshiftIoV1HostSubnet successfully', function(done) {
        //uncomment below and update the code to test watchNetworkOpenshiftIoV1HostSubnet
        //instance.watchNetworkOpenshiftIoV1HostSubnet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchNetworkOpenshiftIoV1HostSubnetList', function() {
      it('should call watchNetworkOpenshiftIoV1HostSubnetList successfully', function(done) {
        //uncomment below and update the code to test watchNetworkOpenshiftIoV1HostSubnetList
        //instance.watchNetworkOpenshiftIoV1HostSubnetList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy', function() {
      it('should call watchNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy successfully', function(done) {
        //uncomment below and update the code to test watchNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy
        //instance.watchNetworkOpenshiftIoV1NamespacedEgressNetworkPolicy(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchNetworkOpenshiftIoV1NamespacedEgressNetworkPolicyList', function() {
      it('should call watchNetworkOpenshiftIoV1NamespacedEgressNetworkPolicyList successfully', function(done) {
        //uncomment below and update the code to test watchNetworkOpenshiftIoV1NamespacedEgressNetworkPolicyList
        //instance.watchNetworkOpenshiftIoV1NamespacedEgressNetworkPolicyList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchNetworkOpenshiftIoV1NetNamespace', function() {
      it('should call watchNetworkOpenshiftIoV1NetNamespace successfully', function(done) {
        //uncomment below and update the code to test watchNetworkOpenshiftIoV1NetNamespace
        //instance.watchNetworkOpenshiftIoV1NetNamespace(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchNetworkOpenshiftIoV1NetNamespaceList', function() {
      it('should call watchNetworkOpenshiftIoV1NetNamespaceList successfully', function(done) {
        //uncomment below and update the code to test watchNetworkOpenshiftIoV1NetNamespaceList
        //instance.watchNetworkOpenshiftIoV1NetNamespaceList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
