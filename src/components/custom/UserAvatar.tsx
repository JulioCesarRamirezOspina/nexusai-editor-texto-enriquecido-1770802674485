import * as React from 'react';

interface UserAvatarProps {
  // Define your component props here
  exampleProp?: string;
}

export function UserAvatar({ exampleProp = "Hello" }: UserAvatarProps) {
  return (
    <div className="p-4 border rounded-md shadow-sm">
      <h3 className="text-lg font-semibold">UserAvatar</h3>
      <p className="text-sm text-muted-foreground">Generated based on: "Un componente de UI llamado UserAvatar. Componente de UI: el componente muestra la foto del perfil del usuario y tiene el borde en gradiente"</p>
      <p>Example Prop: {exampleProp}</p>
      {/* Add your component JSX here */}
    </div>
  );
}

export default UserAvatar;