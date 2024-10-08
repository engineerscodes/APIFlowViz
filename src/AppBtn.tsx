import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  BackgroundVariant,
  MarkerType,
} from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';
import { useCallback, useMemo, useState } from 'react';
import TextUpdaterNode from './MasterNode';
 
const initialNodes = [
  { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } , type: 'bidirectional'},
  { id: '2', position: { x: 0, y: 100 }, data: { label: '2' }, type: 'bidirectional' },
];
const initialEdges = [{ id: 'e1-2', source: '1', target: '2' ,markerEnd: { type: MarkerType.ArrowClosed }}];
 
export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [inputValue, setInputValue] = useState('');

  const nodeTypes = useMemo(() => ({ textUpdater: TextUpdaterNode }), []);
 
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      >
        <Controls />
        <MiniMap />
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}