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
    instance = new OpenShiftApiWithKubernetes.AppsV1beta1Api();
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

  describe('AppsV1beta1Api', function() {
    describe('createAppsV1beta1DeploymentForAllNamespaces', function() {
      it('should call createAppsV1beta1DeploymentForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test createAppsV1beta1DeploymentForAllNamespaces
        //instance.createAppsV1beta1DeploymentForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAppsV1beta1NamespacedDeployment', function() {
      it('should call createAppsV1beta1NamespacedDeployment successfully', function(done) {
        //uncomment below and update the code to test createAppsV1beta1NamespacedDeployment
        //instance.createAppsV1beta1NamespacedDeployment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAppsV1beta1NamespacedDeploymentRollbackRollback', function() {
      it('should call createAppsV1beta1NamespacedDeploymentRollbackRollback successfully', function(done) {
        //uncomment below and update the code to test createAppsV1beta1NamespacedDeploymentRollbackRollback
        //instance.createAppsV1beta1NamespacedDeploymentRollbackRollback(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAppsV1beta1NamespacedStatefulSet', function() {
      it('should call createAppsV1beta1NamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test createAppsV1beta1NamespacedStatefulSet
        //instance.createAppsV1beta1NamespacedStatefulSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createAppsV1beta1StatefulSetForAllNamespaces', function() {
      it('should call createAppsV1beta1StatefulSetForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test createAppsV1beta1StatefulSetForAllNamespaces
        //instance.createAppsV1beta1StatefulSetForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAppsV1beta1CollectionNamespacedDeployment', function() {
      it('should call deleteAppsV1beta1CollectionNamespacedDeployment successfully', function(done) {
        //uncomment below and update the code to test deleteAppsV1beta1CollectionNamespacedDeployment
        //instance.deleteAppsV1beta1CollectionNamespacedDeployment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAppsV1beta1CollectionNamespacedStatefulSet', function() {
      it('should call deleteAppsV1beta1CollectionNamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test deleteAppsV1beta1CollectionNamespacedStatefulSet
        //instance.deleteAppsV1beta1CollectionNamespacedStatefulSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAppsV1beta1NamespacedDeployment', function() {
      it('should call deleteAppsV1beta1NamespacedDeployment successfully', function(done) {
        //uncomment below and update the code to test deleteAppsV1beta1NamespacedDeployment
        //instance.deleteAppsV1beta1NamespacedDeployment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAppsV1beta1NamespacedStatefulSet', function() {
      it('should call deleteAppsV1beta1NamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test deleteAppsV1beta1NamespacedStatefulSet
        //instance.deleteAppsV1beta1NamespacedStatefulSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAppsV1beta1APIResources', function() {
      it('should call getAppsV1beta1APIResources successfully', function(done) {
        //uncomment below and update the code to test getAppsV1beta1APIResources
        //instance.getAppsV1beta1APIResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAppsV1beta1DeploymentForAllNamespaces', function() {
      it('should call listAppsV1beta1DeploymentForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listAppsV1beta1DeploymentForAllNamespaces
        //instance.listAppsV1beta1DeploymentForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAppsV1beta1NamespacedDeployment', function() {
      it('should call listAppsV1beta1NamespacedDeployment successfully', function(done) {
        //uncomment below and update the code to test listAppsV1beta1NamespacedDeployment
        //instance.listAppsV1beta1NamespacedDeployment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAppsV1beta1NamespacedStatefulSet', function() {
      it('should call listAppsV1beta1NamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test listAppsV1beta1NamespacedStatefulSet
        //instance.listAppsV1beta1NamespacedStatefulSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAppsV1beta1StatefulSetForAllNamespaces', function() {
      it('should call listAppsV1beta1StatefulSetForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listAppsV1beta1StatefulSetForAllNamespaces
        //instance.listAppsV1beta1StatefulSetForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchAppsV1beta1NamespacedDeployment', function() {
      it('should call patchAppsV1beta1NamespacedDeployment successfully', function(done) {
        //uncomment below and update the code to test patchAppsV1beta1NamespacedDeployment
        //instance.patchAppsV1beta1NamespacedDeployment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchAppsV1beta1NamespacedDeploymentStatus', function() {
      it('should call patchAppsV1beta1NamespacedDeploymentStatus successfully', function(done) {
        //uncomment below and update the code to test patchAppsV1beta1NamespacedDeploymentStatus
        //instance.patchAppsV1beta1NamespacedDeploymentStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchAppsV1beta1NamespacedScaleScale', function() {
      it('should call patchAppsV1beta1NamespacedScaleScale successfully', function(done) {
        //uncomment below and update the code to test patchAppsV1beta1NamespacedScaleScale
        //instance.patchAppsV1beta1NamespacedScaleScale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchAppsV1beta1NamespacedStatefulSet', function() {
      it('should call patchAppsV1beta1NamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test patchAppsV1beta1NamespacedStatefulSet
        //instance.patchAppsV1beta1NamespacedStatefulSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchAppsV1beta1NamespacedStatefulSetStatus', function() {
      it('should call patchAppsV1beta1NamespacedStatefulSetStatus successfully', function(done) {
        //uncomment below and update the code to test patchAppsV1beta1NamespacedStatefulSetStatus
        //instance.patchAppsV1beta1NamespacedStatefulSetStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAppsV1beta1NamespacedDeployment', function() {
      it('should call readAppsV1beta1NamespacedDeployment successfully', function(done) {
        //uncomment below and update the code to test readAppsV1beta1NamespacedDeployment
        //instance.readAppsV1beta1NamespacedDeployment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAppsV1beta1NamespacedDeploymentStatus', function() {
      it('should call readAppsV1beta1NamespacedDeploymentStatus successfully', function(done) {
        //uncomment below and update the code to test readAppsV1beta1NamespacedDeploymentStatus
        //instance.readAppsV1beta1NamespacedDeploymentStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAppsV1beta1NamespacedScaleScale', function() {
      it('should call readAppsV1beta1NamespacedScaleScale successfully', function(done) {
        //uncomment below and update the code to test readAppsV1beta1NamespacedScaleScale
        //instance.readAppsV1beta1NamespacedScaleScale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAppsV1beta1NamespacedStatefulSet', function() {
      it('should call readAppsV1beta1NamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test readAppsV1beta1NamespacedStatefulSet
        //instance.readAppsV1beta1NamespacedStatefulSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readAppsV1beta1NamespacedStatefulSetStatus', function() {
      it('should call readAppsV1beta1NamespacedStatefulSetStatus successfully', function(done) {
        //uncomment below and update the code to test readAppsV1beta1NamespacedStatefulSetStatus
        //instance.readAppsV1beta1NamespacedStatefulSetStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAppsV1beta1NamespacedDeployment', function() {
      it('should call replaceAppsV1beta1NamespacedDeployment successfully', function(done) {
        //uncomment below and update the code to test replaceAppsV1beta1NamespacedDeployment
        //instance.replaceAppsV1beta1NamespacedDeployment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAppsV1beta1NamespacedDeploymentStatus', function() {
      it('should call replaceAppsV1beta1NamespacedDeploymentStatus successfully', function(done) {
        //uncomment below and update the code to test replaceAppsV1beta1NamespacedDeploymentStatus
        //instance.replaceAppsV1beta1NamespacedDeploymentStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAppsV1beta1NamespacedScaleScale', function() {
      it('should call replaceAppsV1beta1NamespacedScaleScale successfully', function(done) {
        //uncomment below and update the code to test replaceAppsV1beta1NamespacedScaleScale
        //instance.replaceAppsV1beta1NamespacedScaleScale(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAppsV1beta1NamespacedStatefulSet', function() {
      it('should call replaceAppsV1beta1NamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test replaceAppsV1beta1NamespacedStatefulSet
        //instance.replaceAppsV1beta1NamespacedStatefulSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceAppsV1beta1NamespacedStatefulSetStatus', function() {
      it('should call replaceAppsV1beta1NamespacedStatefulSetStatus successfully', function(done) {
        //uncomment below and update the code to test replaceAppsV1beta1NamespacedStatefulSetStatus
        //instance.replaceAppsV1beta1NamespacedStatefulSetStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAppsV1beta1DeploymentListForAllNamespaces', function() {
      it('should call watchAppsV1beta1DeploymentListForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test watchAppsV1beta1DeploymentListForAllNamespaces
        //instance.watchAppsV1beta1DeploymentListForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAppsV1beta1NamespacedDeployment', function() {
      it('should call watchAppsV1beta1NamespacedDeployment successfully', function(done) {
        //uncomment below and update the code to test watchAppsV1beta1NamespacedDeployment
        //instance.watchAppsV1beta1NamespacedDeployment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAppsV1beta1NamespacedDeploymentList', function() {
      it('should call watchAppsV1beta1NamespacedDeploymentList successfully', function(done) {
        //uncomment below and update the code to test watchAppsV1beta1NamespacedDeploymentList
        //instance.watchAppsV1beta1NamespacedDeploymentList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAppsV1beta1NamespacedStatefulSet', function() {
      it('should call watchAppsV1beta1NamespacedStatefulSet successfully', function(done) {
        //uncomment below and update the code to test watchAppsV1beta1NamespacedStatefulSet
        //instance.watchAppsV1beta1NamespacedStatefulSet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAppsV1beta1NamespacedStatefulSetList', function() {
      it('should call watchAppsV1beta1NamespacedStatefulSetList successfully', function(done) {
        //uncomment below and update the code to test watchAppsV1beta1NamespacedStatefulSetList
        //instance.watchAppsV1beta1NamespacedStatefulSetList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchAppsV1beta1StatefulSetListForAllNamespaces', function() {
      it('should call watchAppsV1beta1StatefulSetListForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test watchAppsV1beta1StatefulSetListForAllNamespaces
        //instance.watchAppsV1beta1StatefulSetListForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
