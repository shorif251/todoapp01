import HeroSection from "./components/HeroSection"
import Todos from "./components/Todos/Todos"
import TrandingTodoSlide from "./components/TrandingTodoSlide"

export default function page() {
  return (
    <div>
      <HeroSection />
      <TrandingTodoSlide />
      <Todos />
      {/* <TacTok /> */}
    </div>
  )
}
