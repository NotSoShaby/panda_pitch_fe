def label = "kelly-test-${UUID.randomUUID().toString()}"

podTemplate(
    cloud: 'kubernetes',
    namespace: 'kube-system',
    label: label,
    yaml: """
            apiVersion: v1
            kind: Pod
            spec:
              serviceAccountName: cicd-jenkins
              securityContext:
                fsGroup: 999
                runAsUser: 0
              containers:
              - name: jnlp
                image: ninech/jnlp-slave-with-docker
                args: ['\$(JENKINS_SECRET)', '\$(JENKINS_AGENT_NAME)']
                env:
                - name: DOCKER_HOST
                  value: tcp://localhost:2375
                resources:
                  requests:
                    memory: 2500Mi
                    cpu: 800m
              - name: dind
                image: docker:18.05-dind
                securityContext:
                  privileged: true
                volumeMounts:
                - name: dind-storage
                  mountPath: /var/lib/docker
              volumes:
              - name: dind-storage
                emptyDir: {}
"""
    ) {
    
node (label) {
    def app

    
    sh 'printenv'
    

    
    stage('Clone repository') {
        /* Let's make sure we have the repository cloned to our workspace */
        checkout scm
    }

    stage('Build image') {
        /* This builds the actual image; synonymous to
         * docker build on the command line */

        app = docker.build("abbey")
    }

    stage('Test image') {
        /* Ideally, we would run a test framework against our image.
         * For this example, we're using a Volkswagen-type approach ;-) */

        app.inside {
            sh 'echo "Tests passed"'
        }
    }

    stage('Push image') {
        /* Finally, we'll push the image with two tags:
         * First, the incremental build number from Jenkins
         * Second, the 'latest' tag.
         * Pushing multiple tags is cheap, as all the layers are reused. */

        docker.withRegistry("https://687685460366.dkr.ecr.us-east-2.amazonaws.com", "ecr:us-east-2:Jenkins") {
            app.push("${env.BUILD_NUMBER}")
            app.push("eks")
        }
    }
}
}
