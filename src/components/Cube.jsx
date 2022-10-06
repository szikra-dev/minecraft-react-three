import { useBox } from '@react-three/cannon'
import * as textures from '../images/textures'

export const Cube = ({ position, texture }) => {
  const [ref] = useBox(() => ({
    type: 'Static',
    position,
  }))

  const mapTexture = textures[`${texture}Texture`]

  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshStandardMaterial attach="material" map={mapTexture} />
    </mesh>
  )
}
