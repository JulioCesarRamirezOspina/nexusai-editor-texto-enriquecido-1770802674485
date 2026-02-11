'use client';

import * as React from 'react';
import { 
  Bold, 
  Italic, 
  Underline, 
  List, 
  ListOrdered, 
  AlignLeft, 
  AlignCenter, 
  AlignRight, 
  Heading1, 
  Heading2,
  Type
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  ToggleGroup, 
  ToggleGroupItem 
} from '@/components/ui/toggle-group';

export interface EditorTextoEnriquecidoProps {
  placeholder?: string;
  initialValue?: string;
  onChange?: (html: string) => void;
  className?: string;
}

export function EditorTextoEnriquecido({ 
  placeholder = 'Empieza a escribir...', 
  initialValue = '', 
  onChange, 
  className = '' 
}: EditorTextoEnriquecidoProps) {
  const editorRef = React.useRef<HTMLDivElement>(null);

  const execCommand = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      onChange?.(editorRef.current.innerHTML);
    }
  };

  const handleInput = () => {
    if (editorRef.current) {
      onChange?.(editorRef.current.innerHTML);
    }
  };

  React.useEffect(() => {
    if (editorRef.current && initialValue) {
      editorRef.current.innerHTML = initialValue;
    }
  }, [initialValue]);

  return (
    <div className={`flex flex-col w-full border rounded-lg shadow-sm bg-background overflow-hidden ${className}`}>
      <div className="flex flex-wrap items-center gap-1 p-2 border-b bg-muted/20">
        <ToggleGroup type="multiple" className="flex flex-wrap gap-1">
          <ToggleGroupItem 
            value="bold" 
            aria-label="Negrita" 
            onClick={() => execCommand('bold')}
            className="h-8 w-8 p-0"
          >
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="italic" 
            aria-label="Cursiva" 
            onClick={() => execCommand('italic')}
            className="h-8 w-8 p-0"
          >
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="underline" 
            aria-label="Subrayado" 
            onClick={() => execCommand('underline')}
            className="h-8 w-8 p-0"
          >
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>

        <Separator orientation="vertical" className="h-6 mx-1" />

        <ToggleGroup type="single" className="flex flex-wrap gap-1">
          <ToggleGroupItem 
            value="h1" 
            aria-label="Título 1" 
            onClick={() => execCommand('formatBlock', 'H1')}
            className="h-8 w-8 p-0"
          >
            <Heading1 className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="h2" 
            aria-label="Título 2" 
            onClick={() => execCommand('formatBlock', 'H2')}
            className="h-8 w-8 p-0"
          >
            <Heading2 className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="p" 
            aria-label="Texto normal" 
            onClick={() => execCommand('formatBlock', 'P')}
            className="h-8 w-8 p-0"
          >
            <Type className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>

        <Separator orientation="vertical" className="h-6 mx-1" />

        <ToggleGroup type="single" className="flex flex-wrap gap-1">
          <ToggleGroupItem 
            value="left" 
            aria-label="Alinear izquierda" 
            onClick={() => execCommand('justifyLeft')}
            className="h-8 w-8 p-0"
          >
            <AlignLeft className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="center" 
            aria-label="Centrar" 
            onClick={() => execCommand('justifyCenter')}
            className="h-8 w-8 p-0"
          >
            <AlignCenter className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="right" 
            aria-label="Alinear derecha" 
            onClick={() => execCommand('justifyRight')}
            className="h-8 w-8 p-0"
          >
            <AlignRight className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>

        <Separator orientation="vertical" className="h-6 mx-1" />

        <ToggleGroup type="multiple" className="flex flex-wrap gap-1">
          <ToggleGroupItem 
            value="list" 
            aria-label="Lista con viñetas" 
            onClick={() => execCommand('insertUnorderedList')}
            className="h-8 w-8 p-0"
          >
            <List className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem 
            value="ordered-list" 
            aria-label="Lista numerada" 
            onClick={() => execCommand('insertOrderedList')}
            className="h-8 w-8 p-0"
          >
            <ListOrdered className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        className="min-h-[200px] p-4 focus:outline-none focus:ring-0 prose prose-sm max-w-none text-foreground"
        data-placeholder={placeholder}
        style={{ 
          outline: 'none', 
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word'
        }}
      />
      
      <style jsx>{`\n        [contenteditable]:empty:before {\n          content: attr(data-placeholder);\n          color: #94a3b8;\n          cursor: text;\n        }\n      `}</style>
    </div>
  );
}

export default EditorTextoEnriquecido;"
}