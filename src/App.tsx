import ChatSection from "./components/chat-section";
import EmbeddedVideo from "./components/embedded-video";
import TranscriptionSection from "./components/transcription-section";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function App() {
  return (
    <div className="h-screen w-screen bg-zinc-900 text-white flex">
      <ResizablePanelGroup
        direction="horizontal"
        className="h-[80vh] border border-zinc-700 bg-zinc-900 shadow-lg"
      >
        <ResizablePanel defaultSize={60} className="flex flex-col">
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={60} className="bg-zinc-900 flex p-2">
              <EmbeddedVideo />
            </ResizablePanel>
            <ResizableHandle className="bg-zinc-700" />
            <ResizablePanel className="bg-zinc-900 flex p-2">
              <TranscriptionSection />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
        <ResizableHandle className="bg-zinc-700" />
        <ResizablePanel defaultSize={40} className="bg-zinc-900 flex p-2">
          <ChatSection />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
