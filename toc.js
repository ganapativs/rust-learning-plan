// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded affix "><a href="overview.html">Overview</a></li><li class="chapter-item expanded affix "><a href="rust-ecosystem.html">Rust Ecosystem</a></li><li class="chapter-item expanded affix "><a href="reading-materials.html">Reading Materials</a></li><li class="chapter-item expanded affix "><li class="spacer"></li><li class="chapter-item expanded affix "><li class="part-title">Learning Plan</li><li class="chapter-item expanded "><a href="beginner/index.html"><strong aria-hidden="true">1.</strong> Beginner (Week 1-6)</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="beginner/ecosystem-week1.html"><strong aria-hidden="true">1.1.</strong> Ecosystem</a></li><li class="chapter-item "><a href="beginner/fundamentals-week2.html"><strong aria-hidden="true">1.2.</strong> Fundamentals</a></li><li class="chapter-item "><a href="beginner/ownership-week3.html"><strong aria-hidden="true">1.3.</strong> Ownership</a></li><li class="chapter-item "><a href="beginner/structs-enums-week4.html"><strong aria-hidden="true">1.4.</strong> Structs &amp; Enums</a></li><li class="chapter-item "><a href="beginner/errors-collections-week5.html"><strong aria-hidden="true">1.5.</strong> Errors &amp; Collections</a></li><li class="chapter-item "><a href="beginner/modules-crates-week6.html"><strong aria-hidden="true">1.6.</strong> Modules &amp; Crates</a></li></ol></li><li class="chapter-item expanded "><a href="intermediate/index.html"><strong aria-hidden="true">2.</strong> Intermediate (Week 7-12)</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="intermediate/generics-traits-week7.html"><strong aria-hidden="true">2.1.</strong> Generics &amp; Traits</a></li><li class="chapter-item "><a href="intermediate/advanced-traits-lifetimes-week8.html"><strong aria-hidden="true">2.2.</strong> Advanced Traits &amp; Lifetimes</a></li><li class="chapter-item "><a href="intermediate/concurrency-week9.html"><strong aria-hidden="true">2.3.</strong> Concurrency</a></li><li class="chapter-item "><a href="intermediate/async-week10.html"><strong aria-hidden="true">2.4.</strong> Async</a></li><li class="chapter-item "><a href="intermediate/cli-project-week11.html"><strong aria-hidden="true">2.5.</strong> CLI Project</a></li><li class="chapter-item "><a href="intermediate/web-development-week12.html"><strong aria-hidden="true">2.6.</strong> Web Development</a></li></ol></li><li class="chapter-item expanded "><a href="advanced/index.html"><strong aria-hidden="true">3.</strong> Advanced (Week 13-23)</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="advanced/memory-management-week13.html"><strong aria-hidden="true">3.1.</strong> Memory Management</a></li><li class="chapter-item "><a href="advanced/unsafe-rust-week14.html"><strong aria-hidden="true">3.2.</strong> Unsafe Rust</a></li><li class="chapter-item "><a href="advanced/advanced-design-patterns-week15.html"><strong aria-hidden="true">3.3.</strong> Advanced Design Patterns</a></li><li class="chapter-item "><a href="advanced/ffi-c-interop-week16.html"><strong aria-hidden="true">3.4.</strong> FFI &amp; C Interop</a></li><li class="chapter-item "><a href="advanced/low-level-programming-week17.html"><strong aria-hidden="true">3.5.</strong> Low-Level Programming</a></li><li class="chapter-item "><a href="advanced/embedded-rust-week18.html"><strong aria-hidden="true">3.6.</strong> Embedded Rust</a></li><li class="chapter-item "><a href="advanced/performance-analysis-week19.html"><strong aria-hidden="true">3.7.</strong> Performance Analysis</a></li><li class="chapter-item "><a href="advanced/simd-parallel-computing-week20.html"><strong aria-hidden="true">3.8.</strong> SIMD &amp; Parallel Computing</a></li><li class="chapter-item "><a href="advanced/advanced-optimizations-week21.html"><strong aria-hidden="true">3.9.</strong> Advanced Optimizations</a></li><li class="chapter-item "><a href="advanced/webassembly-week22.html"><strong aria-hidden="true">3.10.</strong> WebAssembly</a></li><li class="chapter-item "><a href="advanced/advanced-concurrency-week23.html"><strong aria-hidden="true">3.11.</strong> Advanced Concurrency</a></li></ol></li><li class="chapter-item expanded "><a href="expert/index.html"><strong aria-hidden="true">4.</strong> Expert (Week 24)</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="expert/capstone-project-week24.html"><strong aria-hidden="true">4.1.</strong> Capstone Project</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded affix "><a href="misc/contributors.html">Contributors</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString().split("#")[0].split("?")[0];
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
