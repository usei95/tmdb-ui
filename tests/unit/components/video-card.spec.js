import VideoCard from "@/components/VideoCard";
import { shallowMount } from "@vue/test-utils";
import getMovieDetailResponse from "../__fixtures__/getMovieDetailResponse";
import Modal from "@/components/Modal";

describe("VideoCard", () => {
  process.env = {
    VUE_APP_YOUTUBE_THUMBNAIL_BASE_URL: "local",
    VUE_APP_YOUTUBE_VIDEO_BASE: "local"
  };
  const video = getMovieDetailResponse.videos.results[0];
  let wrapper;
  beforeEach(() => {
    wrapper = shallowMount(VideoCard, {
      propsData: {
        video
      }
    });
  });

  it("should generate correct youtube embed url", () => {
    expect(wrapper.vm.videoSourceUrl).toBe("local" + video.key);
  });
  it("should generate correct youtube thumbnail image url", () => {
    expect(wrapper.vm.thumbnailImageUrl).toBe(
      "local" + video.key + "/hqdefault.jpg"
    );
  });
  it("should open teaser modal when click to card", async () => {
    const modal = wrapper.find(Modal);
    wrapper.find(".video-card").trigger("click");
    await wrapper.vm.$nextTick();
    expect(modal.vm.visible).toBe(true);
  });
});
