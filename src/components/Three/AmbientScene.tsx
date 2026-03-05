import { useEffect, useRef } from 'react'
import * as THREE from 'three'

export default function AmbientScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const W = window.innerWidth, H = window.innerHeight
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(60, W / H, 0.1, 200)
    camera.position.set(0, 0, 12)

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(W, H)
    renderer.setClearColor(0x000000, 0)
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2

    // ─── Lights ───────────────────────────────────────────────────
    const ambient = new THREE.AmbientLight(0xfff0d0, 0.6)
    scene.add(ambient)

    const saffronLight = new THREE.PointLight(0xe8771a, 5, 25)
    saffronLight.position.set(5, 4, 6)
    scene.add(saffronLight)

    const goldenLight = new THREE.PointLight(0xc9a84c, 3, 20)
    goldenLight.position.set(-6, -3, 4)
    scene.add(goldenLight)

    const kumkumLight = new THREE.PointLight(0xb02020, 1.5, 18)
    kumkumLight.position.set(0, -5, 3)
    scene.add(kumkumLight)

    // ─── Floating lotus petals (thin planes) ─────────────────────
    const petalMeshes: THREE.Mesh[] = []
    const petalCount = 18

    for (let i = 0; i < petalCount; i++) {
      const shape = new THREE.Shape()
      const w = Math.random() * 0.4 + 0.15
      const h = Math.random() * 0.7 + 0.3
      shape.moveTo(0, 0)
      shape.bezierCurveTo(w, h * 0.3, w * 0.8, h * 0.8, 0, h)
      shape.bezierCurveTo(-w * 0.8, h * 0.8, -w, h * 0.3, 0, 0)

      const geo = new THREE.ShapeGeometry(shape)
      const baseColor = i % 3 === 0 ? 0xffe0b0 : i % 2 === 0 ? 0xfff0d0 : 0xffd0c0
      const mat = new THREE.MeshStandardMaterial({
        color: baseColor,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.04 + Math.random() * 0.05,
        roughness: 0.9,
        metalness: 0.1,
      })

      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(
        (Math.random() - 0.5) * 22,
        (Math.random() - 0.5) * 16,
        (Math.random() - 0.5) * 8 - 4
      )
      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      )
      const s = 0.6 + Math.random() * 1.4
      mesh.scale.set(s, s, s)
      scene.add(mesh)
      petalMeshes.push(mesh)
    }

    // ─── Sacred icosahedron (Sri Yantra-inspired) ─────────────────
    const icoGeo = new THREE.IcosahedronGeometry(1.8, 1)
    const icoMat = new THREE.MeshStandardMaterial({
      color: 0xe8771a,
      wireframe: true,
      transparent: true,
      opacity: 0.04,
    })
    const ico = new THREE.Mesh(icoGeo, icoMat)
    ico.position.set(4, 1, -5)
    scene.add(ico)

    const icoSolid = new THREE.Mesh(
      new THREE.IcosahedronGeometry(1.75, 1),
      new THREE.MeshStandardMaterial({
        color: 0xe8771a, transparent: true, opacity: 0.02, roughness: 0.3
      })
    )
    icoSolid.position.copy(ico.position)
    scene.add(icoSolid)

    // ─── Rotating ring (chakra) ───────────────────────────────────
    const ringGeo = new THREE.TorusGeometry(2.5, 0.02, 8, 80)
    const ringMat = new THREE.MeshStandardMaterial({
      color: 0xc9a84c, transparent: true, opacity: 0.08,
      emissive: 0xc9a84c, emissiveIntensity: 0.2,
    })
    const ring = new THREE.Mesh(ringGeo, ringMat)
    ring.position.set(-5, -2, -6)
    ring.rotation.x = Math.PI / 3
    scene.add(ring)

    // Inner ring
    const ring2 = new THREE.Mesh(
      new THREE.TorusGeometry(1.6, 0.015, 8, 60),
      new THREE.MeshStandardMaterial({ color: 0xe8771a, transparent: true, opacity: 0.06 })
    )
    ring2.position.copy(ring.position)
    ring2.rotation.copy(ring.rotation)
    ring2.rotation.z = Math.PI / 4
    scene.add(ring2)

    // ─── Dust / sacred ash particles ─────────────────────────────
    const dustCount = 300
    const dustGeo = new THREE.BufferGeometry()
    const dustPos = new Float32Array(dustCount * 3)
    const dustColors = new Float32Array(dustCount * 3)

    const dustPalette = [
      [1.0, 0.47, 0.10],  // saffron
      [0.79, 0.66, 0.30],  // gold
      [1.0, 0.94, 0.78],  // cream
      [0.69, 0.13, 0.13],  // kumkum
    ]

    for (let i = 0; i < dustCount; i++) {
      dustPos[i * 3] = (Math.random() - 0.5) * 28
      dustPos[i * 3 + 1] = (Math.random() - 0.5) * 20
      dustPos[i * 3 + 2] = (Math.random() - 0.5) * 12 - 4
      const col = dustPalette[Math.floor(Math.random() * dustPalette.length)]
      dustColors[i * 3] = col[0]
      dustColors[i * 3 + 1] = col[1]
      dustColors[i * 3 + 2] = col[2]
    }

    dustGeo.setAttribute('position', new THREE.BufferAttribute(dustPos, 3))
    dustGeo.setAttribute('color', new THREE.BufferAttribute(dustColors, 3))

    const dustMat = new THREE.PointsMaterial({
      size: 0.045, transparent: true, opacity: 0.45,
      vertexColors: true, sizeAttenuation: true,
    })
    const dust = new THREE.Points(dustGeo, dustMat)
    scene.add(dust)

    // ─── Glowing orbs (floating diyas) ───────────────────────────
    interface OrbData { mesh: THREE.Mesh; mat: THREE.MeshStandardMaterial; speed: number; phase: number }
    const orbsData: OrbData[] = []

    const orbDefs = [
      { pos: [6, 3, -4] as [number,number,number],  r: 1.8, col: 0xe8771a, oi: 0.05, speed: 0.6 },
      { pos: [-7, -3, -5] as [number,number,number], r: 2.2, col: 0xc9a84c, oi: 0.04, speed: 0.4 },
      { pos: [3, -5, -6] as [number,number,number],  r: 1.2, col: 0xb02020, oi: 0.04, speed: 0.8 },
      { pos: [-3, 5, -7] as [number,number,number],  r: 1.5, col: 0xe8a000, oi: 0.035, speed: 0.5 },
    ]

    orbDefs.forEach(({ pos, r, col, oi, speed }) => {
      const geo = new THREE.SphereGeometry(r, 24, 24)
      const mat = new THREE.MeshStandardMaterial({
        color: col, transparent: true, opacity: oi,
        emissive: col, emissiveIntensity: 0.4, roughness: 0.2,
      })
      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(...pos)
      scene.add(mesh)
      orbsData.push({ mesh, mat, speed, phase: Math.random() * Math.PI * 2 })
    })

    // ─── Mouse interaction ────────────────────────────────────────
    let mx = 0, my = 0
    const onMouse = (e: MouseEvent) => {
      mx = (e.clientX / W - 0.5) * 2
      my = -(e.clientY / H - 0.5) * 2
    }
    window.addEventListener('mousemove', onMouse)

    // ─── Animation loop ───────────────────────────────────────────
    const clock = new THREE.Clock()
    let animId: number

    const animate = () => {
      animId = requestAnimationFrame(animate)
      const t = clock.getElapsedTime()

      // Drift petals
      petalMeshes.forEach((p, i) => {
        p.position.y += Math.sin(t * 0.2 + i * 0.5) * 0.002
        p.position.x += Math.cos(t * 0.15 + i * 0.3) * 0.001
        p.rotation.z += 0.0007 * (i % 2 === 0 ? 1 : -1)
        p.rotation.x += 0.0003
        // Wrap around
        if (p.position.y > 9) p.position.y = -9
        if (p.position.y < -9) p.position.y = 9
      })

      // Rotate sacred geometry
      ico.rotation.x = t * 0.08
      ico.rotation.y = t * 0.12
      icoSolid.rotation.copy(ico.rotation)

      ring.rotation.z = t * 0.05
      ring2.rotation.z = -t * 0.07

      // Pulse orbs
      orbsData.forEach(({ mesh, mat, speed, phase }) => {
        const pulse = Math.sin(t * speed + phase)
        mat.opacity = 0.025 + pulse * 0.02 + 0.01
        mat.emissiveIntensity = 0.3 + pulse * 0.15
        mesh.position.y += Math.sin(t * speed * 0.5 + phase) * 0.003
      })

      // Dust drift
      dust.rotation.y = t * 0.006
      dust.rotation.x = t * 0.003

      // Saffron light flicker (like diya candle)
      saffronLight.intensity = 4.5 + Math.sin(t * 3.7) * 0.5 + Math.sin(t * 7.3) * 0.3

      // Camera parallax
      camera.position.x += (mx * 0.7 - camera.position.x) * 0.025
      camera.position.y += (my * 0.4 - camera.position.y) * 0.025
      camera.lookAt(scene.position)

      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      const W = window.innerWidth, H = window.innerHeight
      camera.aspect = W / H
      camera.updateProjectionMatrix()
      renderer.setSize(W, H)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('mousemove', onMouse)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 1,
      }}
    />
  )
}
