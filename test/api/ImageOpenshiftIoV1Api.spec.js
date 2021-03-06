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
    instance = new OpenShiftApiWithKubernetes.ImageOpenshiftIoV1Api();
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

  describe('ImageOpenshiftIoV1Api', function() {
    describe('createImageOpenshiftIoV1Image', function() {
      it('should call createImageOpenshiftIoV1Image successfully', function(done) {
        //uncomment below and update the code to test createImageOpenshiftIoV1Image
        //instance.createImageOpenshiftIoV1Image(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createImageOpenshiftIoV1ImageSignature', function() {
      it('should call createImageOpenshiftIoV1ImageSignature successfully', function(done) {
        //uncomment below and update the code to test createImageOpenshiftIoV1ImageSignature
        //instance.createImageOpenshiftIoV1ImageSignature(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createImageOpenshiftIoV1ImageStreamForAllNamespaces', function() {
      it('should call createImageOpenshiftIoV1ImageStreamForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test createImageOpenshiftIoV1ImageStreamForAllNamespaces
        //instance.createImageOpenshiftIoV1ImageStreamForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createImageOpenshiftIoV1ImageStreamImportForAllNamespaces', function() {
      it('should call createImageOpenshiftIoV1ImageStreamImportForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test createImageOpenshiftIoV1ImageStreamImportForAllNamespaces
        //instance.createImageOpenshiftIoV1ImageStreamImportForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createImageOpenshiftIoV1ImageStreamMappingForAllNamespaces', function() {
      it('should call createImageOpenshiftIoV1ImageStreamMappingForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test createImageOpenshiftIoV1ImageStreamMappingForAllNamespaces
        //instance.createImageOpenshiftIoV1ImageStreamMappingForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createImageOpenshiftIoV1ImageStreamTagForAllNamespaces', function() {
      it('should call createImageOpenshiftIoV1ImageStreamTagForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test createImageOpenshiftIoV1ImageStreamTagForAllNamespaces
        //instance.createImageOpenshiftIoV1ImageStreamTagForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createImageOpenshiftIoV1NamespacedImageStream', function() {
      it('should call createImageOpenshiftIoV1NamespacedImageStream successfully', function(done) {
        //uncomment below and update the code to test createImageOpenshiftIoV1NamespacedImageStream
        //instance.createImageOpenshiftIoV1NamespacedImageStream(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createImageOpenshiftIoV1NamespacedImageStreamImport', function() {
      it('should call createImageOpenshiftIoV1NamespacedImageStreamImport successfully', function(done) {
        //uncomment below and update the code to test createImageOpenshiftIoV1NamespacedImageStreamImport
        //instance.createImageOpenshiftIoV1NamespacedImageStreamImport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createImageOpenshiftIoV1NamespacedImageStreamMapping', function() {
      it('should call createImageOpenshiftIoV1NamespacedImageStreamMapping successfully', function(done) {
        //uncomment below and update the code to test createImageOpenshiftIoV1NamespacedImageStreamMapping
        //instance.createImageOpenshiftIoV1NamespacedImageStreamMapping(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('createImageOpenshiftIoV1NamespacedImageStreamTag', function() {
      it('should call createImageOpenshiftIoV1NamespacedImageStreamTag successfully', function(done) {
        //uncomment below and update the code to test createImageOpenshiftIoV1NamespacedImageStreamTag
        //instance.createImageOpenshiftIoV1NamespacedImageStreamTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteImageOpenshiftIoV1CollectionImage', function() {
      it('should call deleteImageOpenshiftIoV1CollectionImage successfully', function(done) {
        //uncomment below and update the code to test deleteImageOpenshiftIoV1CollectionImage
        //instance.deleteImageOpenshiftIoV1CollectionImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteImageOpenshiftIoV1CollectionNamespacedImageStream', function() {
      it('should call deleteImageOpenshiftIoV1CollectionNamespacedImageStream successfully', function(done) {
        //uncomment below and update the code to test deleteImageOpenshiftIoV1CollectionNamespacedImageStream
        //instance.deleteImageOpenshiftIoV1CollectionNamespacedImageStream(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteImageOpenshiftIoV1Image', function() {
      it('should call deleteImageOpenshiftIoV1Image successfully', function(done) {
        //uncomment below and update the code to test deleteImageOpenshiftIoV1Image
        //instance.deleteImageOpenshiftIoV1Image(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteImageOpenshiftIoV1ImageSignature', function() {
      it('should call deleteImageOpenshiftIoV1ImageSignature successfully', function(done) {
        //uncomment below and update the code to test deleteImageOpenshiftIoV1ImageSignature
        //instance.deleteImageOpenshiftIoV1ImageSignature(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteImageOpenshiftIoV1NamespacedImageStream', function() {
      it('should call deleteImageOpenshiftIoV1NamespacedImageStream successfully', function(done) {
        //uncomment below and update the code to test deleteImageOpenshiftIoV1NamespacedImageStream
        //instance.deleteImageOpenshiftIoV1NamespacedImageStream(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteImageOpenshiftIoV1NamespacedImageStreamTag', function() {
      it('should call deleteImageOpenshiftIoV1NamespacedImageStreamTag successfully', function(done) {
        //uncomment below and update the code to test deleteImageOpenshiftIoV1NamespacedImageStreamTag
        //instance.deleteImageOpenshiftIoV1NamespacedImageStreamTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getImageOpenshiftIoV1APIResources', function() {
      it('should call getImageOpenshiftIoV1APIResources successfully', function(done) {
        //uncomment below and update the code to test getImageOpenshiftIoV1APIResources
        //instance.getImageOpenshiftIoV1APIResources(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listImageOpenshiftIoV1Image', function() {
      it('should call listImageOpenshiftIoV1Image successfully', function(done) {
        //uncomment below and update the code to test listImageOpenshiftIoV1Image
        //instance.listImageOpenshiftIoV1Image(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listImageOpenshiftIoV1ImageStreamForAllNamespaces', function() {
      it('should call listImageOpenshiftIoV1ImageStreamForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listImageOpenshiftIoV1ImageStreamForAllNamespaces
        //instance.listImageOpenshiftIoV1ImageStreamForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listImageOpenshiftIoV1ImageStreamTagForAllNamespaces', function() {
      it('should call listImageOpenshiftIoV1ImageStreamTagForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test listImageOpenshiftIoV1ImageStreamTagForAllNamespaces
        //instance.listImageOpenshiftIoV1ImageStreamTagForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listImageOpenshiftIoV1NamespacedImageStream', function() {
      it('should call listImageOpenshiftIoV1NamespacedImageStream successfully', function(done) {
        //uncomment below and update the code to test listImageOpenshiftIoV1NamespacedImageStream
        //instance.listImageOpenshiftIoV1NamespacedImageStream(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listImageOpenshiftIoV1NamespacedImageStreamTag', function() {
      it('should call listImageOpenshiftIoV1NamespacedImageStreamTag successfully', function(done) {
        //uncomment below and update the code to test listImageOpenshiftIoV1NamespacedImageStreamTag
        //instance.listImageOpenshiftIoV1NamespacedImageStreamTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchImageOpenshiftIoV1Image', function() {
      it('should call patchImageOpenshiftIoV1Image successfully', function(done) {
        //uncomment below and update the code to test patchImageOpenshiftIoV1Image
        //instance.patchImageOpenshiftIoV1Image(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchImageOpenshiftIoV1NamespacedImageStream', function() {
      it('should call patchImageOpenshiftIoV1NamespacedImageStream successfully', function(done) {
        //uncomment below and update the code to test patchImageOpenshiftIoV1NamespacedImageStream
        //instance.patchImageOpenshiftIoV1NamespacedImageStream(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchImageOpenshiftIoV1NamespacedImageStreamStatus', function() {
      it('should call patchImageOpenshiftIoV1NamespacedImageStreamStatus successfully', function(done) {
        //uncomment below and update the code to test patchImageOpenshiftIoV1NamespacedImageStreamStatus
        //instance.patchImageOpenshiftIoV1NamespacedImageStreamStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchImageOpenshiftIoV1NamespacedImageStreamTag', function() {
      it('should call patchImageOpenshiftIoV1NamespacedImageStreamTag successfully', function(done) {
        //uncomment below and update the code to test patchImageOpenshiftIoV1NamespacedImageStreamTag
        //instance.patchImageOpenshiftIoV1NamespacedImageStreamTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readImageOpenshiftIoV1Image', function() {
      it('should call readImageOpenshiftIoV1Image successfully', function(done) {
        //uncomment below and update the code to test readImageOpenshiftIoV1Image
        //instance.readImageOpenshiftIoV1Image(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readImageOpenshiftIoV1NamespacedImageStream', function() {
      it('should call readImageOpenshiftIoV1NamespacedImageStream successfully', function(done) {
        //uncomment below and update the code to test readImageOpenshiftIoV1NamespacedImageStream
        //instance.readImageOpenshiftIoV1NamespacedImageStream(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readImageOpenshiftIoV1NamespacedImageStreamImage', function() {
      it('should call readImageOpenshiftIoV1NamespacedImageStreamImage successfully', function(done) {
        //uncomment below and update the code to test readImageOpenshiftIoV1NamespacedImageStreamImage
        //instance.readImageOpenshiftIoV1NamespacedImageStreamImage(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readImageOpenshiftIoV1NamespacedImageStreamStatus', function() {
      it('should call readImageOpenshiftIoV1NamespacedImageStreamStatus successfully', function(done) {
        //uncomment below and update the code to test readImageOpenshiftIoV1NamespacedImageStreamStatus
        //instance.readImageOpenshiftIoV1NamespacedImageStreamStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readImageOpenshiftIoV1NamespacedImageStreamTag', function() {
      it('should call readImageOpenshiftIoV1NamespacedImageStreamTag successfully', function(done) {
        //uncomment below and update the code to test readImageOpenshiftIoV1NamespacedImageStreamTag
        //instance.readImageOpenshiftIoV1NamespacedImageStreamTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('readImageOpenshiftIoV1NamespacedSecretListSecrets', function() {
      it('should call readImageOpenshiftIoV1NamespacedSecretListSecrets successfully', function(done) {
        //uncomment below and update the code to test readImageOpenshiftIoV1NamespacedSecretListSecrets
        //instance.readImageOpenshiftIoV1NamespacedSecretListSecrets(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceImageOpenshiftIoV1Image', function() {
      it('should call replaceImageOpenshiftIoV1Image successfully', function(done) {
        //uncomment below and update the code to test replaceImageOpenshiftIoV1Image
        //instance.replaceImageOpenshiftIoV1Image(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceImageOpenshiftIoV1NamespacedImageStream', function() {
      it('should call replaceImageOpenshiftIoV1NamespacedImageStream successfully', function(done) {
        //uncomment below and update the code to test replaceImageOpenshiftIoV1NamespacedImageStream
        //instance.replaceImageOpenshiftIoV1NamespacedImageStream(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceImageOpenshiftIoV1NamespacedImageStreamStatus', function() {
      it('should call replaceImageOpenshiftIoV1NamespacedImageStreamStatus successfully', function(done) {
        //uncomment below and update the code to test replaceImageOpenshiftIoV1NamespacedImageStreamStatus
        //instance.replaceImageOpenshiftIoV1NamespacedImageStreamStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('replaceImageOpenshiftIoV1NamespacedImageStreamTag', function() {
      it('should call replaceImageOpenshiftIoV1NamespacedImageStreamTag successfully', function(done) {
        //uncomment below and update the code to test replaceImageOpenshiftIoV1NamespacedImageStreamTag
        //instance.replaceImageOpenshiftIoV1NamespacedImageStreamTag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchImageOpenshiftIoV1Image', function() {
      it('should call watchImageOpenshiftIoV1Image successfully', function(done) {
        //uncomment below and update the code to test watchImageOpenshiftIoV1Image
        //instance.watchImageOpenshiftIoV1Image(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchImageOpenshiftIoV1ImageList', function() {
      it('should call watchImageOpenshiftIoV1ImageList successfully', function(done) {
        //uncomment below and update the code to test watchImageOpenshiftIoV1ImageList
        //instance.watchImageOpenshiftIoV1ImageList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchImageOpenshiftIoV1ImageStreamListForAllNamespaces', function() {
      it('should call watchImageOpenshiftIoV1ImageStreamListForAllNamespaces successfully', function(done) {
        //uncomment below and update the code to test watchImageOpenshiftIoV1ImageStreamListForAllNamespaces
        //instance.watchImageOpenshiftIoV1ImageStreamListForAllNamespaces(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchImageOpenshiftIoV1NamespacedImageStream', function() {
      it('should call watchImageOpenshiftIoV1NamespacedImageStream successfully', function(done) {
        //uncomment below and update the code to test watchImageOpenshiftIoV1NamespacedImageStream
        //instance.watchImageOpenshiftIoV1NamespacedImageStream(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('watchImageOpenshiftIoV1NamespacedImageStreamList', function() {
      it('should call watchImageOpenshiftIoV1NamespacedImageStreamList successfully', function(done) {
        //uncomment below and update the code to test watchImageOpenshiftIoV1NamespacedImageStreamList
        //instance.watchImageOpenshiftIoV1NamespacedImageStreamList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
