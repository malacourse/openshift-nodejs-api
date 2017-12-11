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
    instance = new OpenShiftApiWithKubernetes.RbacAuthorizationV1beta1Api();
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

  describe('RbacAuthorizationV1beta1Api', function() {
    describe('createRbacAuthorizationV1beta1ClusterRole', function() {
      it('should call createRbacAuthorizationV1beta1ClusterRole successfully', function(done) {
        //uncomment below and update the code to test createRbacAuthorizationV1beta1ClusterRole
        //instance.createRbacAuthorizationV1beta1ClusterRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRbacAuthorizationV1beta1ClusterRoleBinding', function() {
      it('should call createRbacAuthorizationV1beta1ClusterRoleBinding successfully', function(done) {
        //uncomment below and update the code to test createRbacAuthorizationV1beta1ClusterRoleBinding
        //instance.createRbacAuthorizationV1beta1ClusterRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRbacAuthorizationV1beta1NamespacedRole', function() {
      it('should call createRbacAuthorizationV1beta1NamespacedRole successfully', function(done) {
        //uncomment below and update the code to test createRbacAuthorizationV1beta1NamespacedRole
        //instance.createRbacAuthorizationV1beta1NamespacedRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRbacAuthorizationV1beta1NamespacedRoleBinding', function() {
      it('should call createRbacAuthorizationV1beta1NamespacedRoleBinding successfully', function(done) {
        //uncomment below and update the code to test createRbacAuthorizationV1beta1NamespacedRoleBinding
        //instance.createRbacAuthorizationV1beta1NamespacedRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRbacAuthorizationV1beta1RoleBindingForAllNamespaces', function() {
      it('should call createRbacAuthorizationV1beta1RoleBindingForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test createRbacAuthorizationV1beta1RoleBindingForAllNamespaces
        //instance.createRbacAuthorizationV1beta1RoleBindingForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createRbacAuthorizationV1beta1RoleForAllNamespaces', function() {
      it('should call createRbacAuthorizationV1beta1RoleForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test createRbacAuthorizationV1beta1RoleForAllNamespaces
        //instance.createRbacAuthorizationV1beta1RoleForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRbacAuthorizationV1beta1ClusterRole', function() {
      it('should call deleteRbacAuthorizationV1beta1ClusterRole successfully', function(done) {
        //uncomment below and update the code to test deleteRbacAuthorizationV1beta1ClusterRole
        //instance.deleteRbacAuthorizationV1beta1ClusterRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRbacAuthorizationV1beta1ClusterRoleBinding', function() {
      it('should call deleteRbacAuthorizationV1beta1ClusterRoleBinding successfully', function(done) {
        //uncomment below and update the code to test deleteRbacAuthorizationV1beta1ClusterRoleBinding
        //instance.deleteRbacAuthorizationV1beta1ClusterRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRbacAuthorizationV1beta1CollectionClusterRole', function() {
      it('should call deleteRbacAuthorizationV1beta1CollectionClusterRole successfully', function(done) {
        //uncomment below and update the code to test deleteRbacAuthorizationV1beta1CollectionClusterRole
        //instance.deleteRbacAuthorizationV1beta1CollectionClusterRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRbacAuthorizationV1beta1CollectionClusterRoleBinding', function() {
      it('should call deleteRbacAuthorizationV1beta1CollectionClusterRoleBinding successfully', function(done) {
        //uncomment below and update the code to test deleteRbacAuthorizationV1beta1CollectionClusterRoleBinding
        //instance.deleteRbacAuthorizationV1beta1CollectionClusterRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRbacAuthorizationV1beta1CollectionNamespacedRole', function() {
      it('should call deleteRbacAuthorizationV1beta1CollectionNamespacedRole successfully', function(done) {
        //uncomment below and update the code to test deleteRbacAuthorizationV1beta1CollectionNamespacedRole
        //instance.deleteRbacAuthorizationV1beta1CollectionNamespacedRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRbacAuthorizationV1beta1CollectionNamespacedRoleBinding', function() {
      it('should call deleteRbacAuthorizationV1beta1CollectionNamespacedRoleBinding successfully', function(done) {
        //uncomment below and update the code to test deleteRbacAuthorizationV1beta1CollectionNamespacedRoleBinding
        //instance.deleteRbacAuthorizationV1beta1CollectionNamespacedRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRbacAuthorizationV1beta1NamespacedRole', function() {
      it('should call deleteRbacAuthorizationV1beta1NamespacedRole successfully', function(done) {
        //uncomment below and update the code to test deleteRbacAuthorizationV1beta1NamespacedRole
        //instance.deleteRbacAuthorizationV1beta1NamespacedRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteRbacAuthorizationV1beta1NamespacedRoleBinding', function() {
      it('should call deleteRbacAuthorizationV1beta1NamespacedRoleBinding successfully', function(done) {
        //uncomment below and update the code to test deleteRbacAuthorizationV1beta1NamespacedRoleBinding
        //instance.deleteRbacAuthorizationV1beta1NamespacedRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getRbacAuthorizationV1beta1APIResources', function() {
      it('should call getRbacAuthorizationV1beta1APIResources successfully', function(done) {
        //uncomment below and update the code to test getRbacAuthorizationV1beta1APIResources
        //instance.getRbacAuthorizationV1beta1APIResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listRbacAuthorizationV1beta1ClusterRole', function() {
      it('should call listRbacAuthorizationV1beta1ClusterRole successfully', function(done) {
        //uncomment below and update the code to test listRbacAuthorizationV1beta1ClusterRole
        //instance.listRbacAuthorizationV1beta1ClusterRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listRbacAuthorizationV1beta1ClusterRoleBinding', function() {
      it('should call listRbacAuthorizationV1beta1ClusterRoleBinding successfully', function(done) {
        //uncomment below and update the code to test listRbacAuthorizationV1beta1ClusterRoleBinding
        //instance.listRbacAuthorizationV1beta1ClusterRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listRbacAuthorizationV1beta1NamespacedRole', function() {
      it('should call listRbacAuthorizationV1beta1NamespacedRole successfully', function(done) {
        //uncomment below and update the code to test listRbacAuthorizationV1beta1NamespacedRole
        //instance.listRbacAuthorizationV1beta1NamespacedRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listRbacAuthorizationV1beta1NamespacedRoleBinding', function() {
      it('should call listRbacAuthorizationV1beta1NamespacedRoleBinding successfully', function(done) {
        //uncomment below and update the code to test listRbacAuthorizationV1beta1NamespacedRoleBinding
        //instance.listRbacAuthorizationV1beta1NamespacedRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listRbacAuthorizationV1beta1RoleBindingForAllNamespaces', function() {
      it('should call listRbacAuthorizationV1beta1RoleBindingForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listRbacAuthorizationV1beta1RoleBindingForAllNamespaces
        //instance.listRbacAuthorizationV1beta1RoleBindingForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listRbacAuthorizationV1beta1RoleForAllNamespaces', function() {
      it('should call listRbacAuthorizationV1beta1RoleForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listRbacAuthorizationV1beta1RoleForAllNamespaces
        //instance.listRbacAuthorizationV1beta1RoleForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchRbacAuthorizationV1beta1ClusterRole', function() {
      it('should call patchRbacAuthorizationV1beta1ClusterRole successfully', function(done) {
        //uncomment below and update the code to test patchRbacAuthorizationV1beta1ClusterRole
        //instance.patchRbacAuthorizationV1beta1ClusterRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchRbacAuthorizationV1beta1ClusterRoleBinding', function() {
      it('should call patchRbacAuthorizationV1beta1ClusterRoleBinding successfully', function(done) {
        //uncomment below and update the code to test patchRbacAuthorizationV1beta1ClusterRoleBinding
        //instance.patchRbacAuthorizationV1beta1ClusterRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchRbacAuthorizationV1beta1NamespacedRole', function() {
      it('should call patchRbacAuthorizationV1beta1NamespacedRole successfully', function(done) {
        //uncomment below and update the code to test patchRbacAuthorizationV1beta1NamespacedRole
        //instance.patchRbacAuthorizationV1beta1NamespacedRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchRbacAuthorizationV1beta1NamespacedRoleBinding', function() {
      it('should call patchRbacAuthorizationV1beta1NamespacedRoleBinding successfully', function(done) {
        //uncomment below and update the code to test patchRbacAuthorizationV1beta1NamespacedRoleBinding
        //instance.patchRbacAuthorizationV1beta1NamespacedRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readRbacAuthorizationV1beta1ClusterRole', function() {
      it('should call readRbacAuthorizationV1beta1ClusterRole successfully', function(done) {
        //uncomment below and update the code to test readRbacAuthorizationV1beta1ClusterRole
        //instance.readRbacAuthorizationV1beta1ClusterRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readRbacAuthorizationV1beta1ClusterRoleBinding', function() {
      it('should call readRbacAuthorizationV1beta1ClusterRoleBinding successfully', function(done) {
        //uncomment below and update the code to test readRbacAuthorizationV1beta1ClusterRoleBinding
        //instance.readRbacAuthorizationV1beta1ClusterRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readRbacAuthorizationV1beta1NamespacedRole', function() {
      it('should call readRbacAuthorizationV1beta1NamespacedRole successfully', function(done) {
        //uncomment below and update the code to test readRbacAuthorizationV1beta1NamespacedRole
        //instance.readRbacAuthorizationV1beta1NamespacedRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readRbacAuthorizationV1beta1NamespacedRoleBinding', function() {
      it('should call readRbacAuthorizationV1beta1NamespacedRoleBinding successfully', function(done) {
        //uncomment below and update the code to test readRbacAuthorizationV1beta1NamespacedRoleBinding
        //instance.readRbacAuthorizationV1beta1NamespacedRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceRbacAuthorizationV1beta1ClusterRole', function() {
      it('should call replaceRbacAuthorizationV1beta1ClusterRole successfully', function(done) {
        //uncomment below and update the code to test replaceRbacAuthorizationV1beta1ClusterRole
        //instance.replaceRbacAuthorizationV1beta1ClusterRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceRbacAuthorizationV1beta1ClusterRoleBinding', function() {
      it('should call replaceRbacAuthorizationV1beta1ClusterRoleBinding successfully', function(done) {
        //uncomment below and update the code to test replaceRbacAuthorizationV1beta1ClusterRoleBinding
        //instance.replaceRbacAuthorizationV1beta1ClusterRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceRbacAuthorizationV1beta1NamespacedRole', function() {
      it('should call replaceRbacAuthorizationV1beta1NamespacedRole successfully', function(done) {
        //uncomment below and update the code to test replaceRbacAuthorizationV1beta1NamespacedRole
        //instance.replaceRbacAuthorizationV1beta1NamespacedRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceRbacAuthorizationV1beta1NamespacedRoleBinding', function() {
      it('should call replaceRbacAuthorizationV1beta1NamespacedRoleBinding successfully', function(done) {
        //uncomment below and update the code to test replaceRbacAuthorizationV1beta1NamespacedRoleBinding
        //instance.replaceRbacAuthorizationV1beta1NamespacedRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchRbacAuthorizationV1beta1ClusterRole', function() {
      it('should call watchRbacAuthorizationV1beta1ClusterRole successfully', function(done) {
        //uncomment below and update the code to test watchRbacAuthorizationV1beta1ClusterRole
        //instance.watchRbacAuthorizationV1beta1ClusterRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchRbacAuthorizationV1beta1ClusterRoleBinding', function() {
      it('should call watchRbacAuthorizationV1beta1ClusterRoleBinding successfully', function(done) {
        //uncomment below and update the code to test watchRbacAuthorizationV1beta1ClusterRoleBinding
        //instance.watchRbacAuthorizationV1beta1ClusterRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchRbacAuthorizationV1beta1ClusterRoleBindingList', function() {
      it('should call watchRbacAuthorizationV1beta1ClusterRoleBindingList successfully', function(done) {
        //uncomment below and update the code to test watchRbacAuthorizationV1beta1ClusterRoleBindingList
        //instance.watchRbacAuthorizationV1beta1ClusterRoleBindingList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchRbacAuthorizationV1beta1ClusterRoleList', function() {
      it('should call watchRbacAuthorizationV1beta1ClusterRoleList successfully', function(done) {
        //uncomment below and update the code to test watchRbacAuthorizationV1beta1ClusterRoleList
        //instance.watchRbacAuthorizationV1beta1ClusterRoleList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchRbacAuthorizationV1beta1NamespacedRole', function() {
      it('should call watchRbacAuthorizationV1beta1NamespacedRole successfully', function(done) {
        //uncomment below and update the code to test watchRbacAuthorizationV1beta1NamespacedRole
        //instance.watchRbacAuthorizationV1beta1NamespacedRole(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchRbacAuthorizationV1beta1NamespacedRoleBinding', function() {
      it('should call watchRbacAuthorizationV1beta1NamespacedRoleBinding successfully', function(done) {
        //uncomment below and update the code to test watchRbacAuthorizationV1beta1NamespacedRoleBinding
        //instance.watchRbacAuthorizationV1beta1NamespacedRoleBinding(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchRbacAuthorizationV1beta1NamespacedRoleBindingList', function() {
      it('should call watchRbacAuthorizationV1beta1NamespacedRoleBindingList successfully', function(done) {
        //uncomment below and update the code to test watchRbacAuthorizationV1beta1NamespacedRoleBindingList
        //instance.watchRbacAuthorizationV1beta1NamespacedRoleBindingList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchRbacAuthorizationV1beta1NamespacedRoleList', function() {
      it('should call watchRbacAuthorizationV1beta1NamespacedRoleList successfully', function(done) {
        //uncomment below and update the code to test watchRbacAuthorizationV1beta1NamespacedRoleList
        //instance.watchRbacAuthorizationV1beta1NamespacedRoleList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchRbacAuthorizationV1beta1RoleBindingListForAllNamespaces', function() {
      it('should call watchRbacAuthorizationV1beta1RoleBindingListForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test watchRbacAuthorizationV1beta1RoleBindingListForAllNamespaces
        //instance.watchRbacAuthorizationV1beta1RoleBindingListForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchRbacAuthorizationV1beta1RoleListForAllNamespaces', function() {
      it('should call watchRbacAuthorizationV1beta1RoleListForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test watchRbacAuthorizationV1beta1RoleListForAllNamespaces
        //instance.watchRbacAuthorizationV1beta1RoleListForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
