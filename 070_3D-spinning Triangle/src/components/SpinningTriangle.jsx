import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

const SpinningTriangle = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, 600 / 400, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    
    renderer.setSize(600, 400)
    renderer.setClearColor(0x000000, 0)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
    scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
    directionalLight.position.set(5, 5, 5)
    directionalLight.castShadow = true
    scene.add(directionalLight)

    const pointLight = new THREE.PointLight(0x4fc3f7, 0.5, 100)
    pointLight.position.set(-5, -5, 5)
    scene.add(pointLight)

    // Geometry - Triangle
    const geometry = new THREE.BufferGeometry()
    const vertices = new Float32Array([
      0, 1, 0,    // top vertex
      -1, -1, 0,  // bottom left
      1, -1, 0    // bottom right
    ])
    
    geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
    geometry.computeVertexNormals()

    // Material with gradient colors
    const material = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      shininess: 100,
      side: THREE.DoubleSide,
      vertexColors: true
    })

    // Create colors for each vertex
    const colors = new Float32Array([
      1, 0.2, 0.2,  // red - top
      0.2, 1, 0.2,  // green - bottom left
      0.2, 0.2, 1   // blue - bottom right
    ])
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const triangle = new THREE.Mesh(geometry, material)
    triangle.castShadow = true
    scene.add(triangle)

    // Add wireframe
    const wireframeGeometry = new THREE.BufferGeometry()
    wireframeGeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3))
    
    const wireframeMaterial = new THREE.LineBasicMaterial({ 
      color: 0xffffff, 
      transparent: true, 
      opacity: 0.3 
    })
    
    const wireframe = new THREE.LineLoop(wireframeGeometry, wireframeMaterial)
    scene.add(wireframe)

    camera.position.z = 3

    // Animation
    const animate = () => {
      requestAnimationFrame(animate)

      // Smooth rotation
      triangle.rotation.x += 0.01
      triangle.rotation.y += 0.005
      triangle.rotation.z += 0.008

      // Pulsating scale effect
      const scale = 1 + Math.sin(Date.now() * 0.002) * 0.1
      triangle.scale.set(scale, scale, scale)

      // Wireframe follows with slight delay
      wireframe.rotation.x = triangle.rotation.x
      wireframe.rotation.y = triangle.rotation.y
      wireframe.rotation.z = triangle.rotation.z
      wireframe.scale.set(scale, scale, scale)

      renderer.render(scene, camera)
    }

    mountRef.current.appendChild(renderer.domElement)
    animate()

    // Handle resize
    const handleResize = () => {
      const width = mountRef.current.clientWidth
      const height = mountRef.current.clientHeight
      renderer.setSize(width, height)
      camera.aspect = width / height
      camera.updateProjectionMatrix()
    }

    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize)
      mountRef.current?.removeChild(renderer.domElement)
      geometry.dispose()
      material.dispose()
      wireframeGeometry.dispose()
      wireframeMaterial.dispose()
      renderer.dispose()
    }
  }, [])

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
}

export default SpinningTriangle