import { Canvas, useFrame } from '@react-three/fiber'
import './App.css'
import { Color } from './constants/Color'
import { useRef } from 'react'

const Cube = ({ position, size, color, rotation }: any) => {

  const ref = useRef()

  useFrame((state, delta) => {
    ref.current.rotation.x += delta * rotation[0]
    ref.current.rotation.y += delta * rotation[1]
  })

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
}

const App = () => {

  return (
    <Canvas>
      <directionalLight position={[1, -0.7, 2]} />
      <ambientLight intensity={0.8} />
      <group position={[0, 0, 0]}>
        <Cube position={[1, -0.5, 0]} color={Color.lightBlue} size={[1, 1, 1]} rotation={[0, 1, 0]} />
        <Cube position={[-2, 1, 0]} color={Color.lightPink} size={[1, 1, 1]} rotation={[0.3, 1, 0]}/>
        <Cube position={[-1.5, -1.5, 1.5]} color={Color.lightGreen} size={[1, 1, 1]} rotation={[1, 0.2, 0]} />
        <Cube position={[4, 1.5, -2]} color={Color.lightPurple} size={[1, 1, 1]} rotation={[0.5, 0.4, 0]} />
      </group>
    </Canvas>
  )
}

export default App
