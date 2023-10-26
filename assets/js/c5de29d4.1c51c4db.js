"use strict";(self.webpackChunksolus_help_center=self.webpackChunksolus_help_center||[]).push([[3851],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),d=i,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3284:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const r={title:"Creating a New Package",summary:"Creating a Package For Inclusion in the Repositories",sidebar_position:3},l="Creating a New Package",o={unversionedId:"packaging/creating-a-new-package",id:"packaging/creating-a-new-package",title:"Creating a New Package",description:"This page will take you through the steps required to build a new package for the Solus package repositories. For this example, we will use the command line utility tree, which is already packaged for Solus, but we will pretend like it's not.",source:"@site/docs/packaging/creating-a-new-package.md",sourceDirName:"packaging",slug:"/packaging/creating-a-new-package",permalink:"/docs/packaging/creating-a-new-package",draft:!1,editUrl:"https://github.com/getsolus/help-center-docs/tree/master/docs/packaging/creating-a-new-package.md",tags:[],version:"current",lastUpdatedAt:1698334387,formattedLastUpdatedAt:"Oct 26, 2023",sidebarPosition:3,frontMatter:{title:"Creating a New Package",summary:"Creating a Package For Inclusion in the Repositories",sidebar_position:3},sidebar:"packagingSidebar",previous:{title:"Update Your Development Environment",permalink:"/docs/packaging/update-dev-environment"},next:{title:"Updating an Existing Package",permalink:"/docs/packaging/updating-an-existing-package"}},s={},p=[{value:"Update an existing clone",id:"update-an-existing-clone",level:3},{value:"Create a New Package Directory",id:"create-a-new-package-directory",level:2},{value:"Create The <code>MAINTAINERS.md</code> File",id:"create-the-maintainersmd-file",level:2},{value:"Create the <code>package.yml</code> File",id:"create-the-packageyml-file",level:2},{value:"Build the Package",id:"build-the-package",level:2},{value:"Commit your Changes",id:"commit-your-changes",level:2},{value:"Commit message format for new packages",id:"commit-message-format-for-new-packages",level:3}],c={toc:p},m="wrapper";function u(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"creating-a-new-package"},"Creating a New Package"),(0,i.kt)("p",null,"This page will take you through the steps required to build a new package for the Solus package repositories. For this example, we will use the command line utility ",(0,i.kt)("a",{parentName:"p",href:"https://gitlab.com/OldManProgrammer/unix-tree"},"tree"),", which is already packaged for Solus, but we will pretend like it's not."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Please ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/getsolus/packages/issues?q=label%3A%22Package+Request%22"},"look to see if an issue has been filed")," and ",(0,i.kt)("em",{parentName:"strong"},"accepted")," for the software or library you intend to package"),". If there is an existing request, please add a link to it in your pull request. Ex:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre"},"This PR resolves software request https://github.com/getsolus/packages/issues/123\n"))),(0,i.kt)("h3",{id:"update-an-existing-clone"},"Update an existing clone"),(0,i.kt)("p",null,"If you do not have a local clone set up yet, see ",(0,i.kt)("a",{parentName:"p",href:"/docs/packaging/prepare-for-packaging#fork-the-getsoluspackages-repository"},"Prepare for Packaging")),(0,i.kt)("p",null,"Bring your local clone up to date. Run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/solus-packages\ngit switch main\ngit pull\n")),(0,i.kt)("h2",{id:"create-a-new-package-directory"},"Create a New Package Directory"),(0,i.kt)("p",null,"Create a new subdirectory for the new package. Use the package name as the directory name and create it in the appropriate prefix directory in ",(0,i.kt)("inlineCode",{parentName:"p"},"packages")," (usually the first letter of the package)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir packages/t/tree\ncd packages/t/tree\n")),(0,i.kt)("p",null,"Now, create a new branch. This will allow you to more easily separate your work from any new changes made to the package repository, which will allow you to more easily rebase any changes if needed. To do so run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git switch -c your-branch\n")),(0,i.kt)("h2",{id:"create-the-maintainersmd-file"},"Create The ",(0,i.kt)("inlineCode",{parentName:"h2"},"MAINTAINERS.md")," File"),(0,i.kt)("p",null,"You must add a file called ",(0,i.kt)("inlineCode",{parentName:"p"},"MAINTAINERS.md")," using the template in ",(0,i.kt)("a",{parentName:"p",href:"/docs/packaging/procedures/maintainership"},"Maintainership"),". Solus uses this to track the primary maintainer(s) for each package."),(0,i.kt)("h2",{id:"create-the-packageyml-file"},"Create the ",(0,i.kt)("inlineCode",{parentName:"h2"},"package.yml")," File"),(0,i.kt)("p",null,"You will need a link to the most recent source tarball for this from the software's website."),(0,i.kt)("p",null,"To create a skeleton ",(0,i.kt)("inlineCode",{parentName:"p"},"package.yml")," file, use the the ",(0,i.kt)("inlineCode",{parentName:"p"},"go-task new")," command."),(0,i.kt)("p",null,"This command takes two arguments, in the following order:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"package name"),(0,i.kt)("li",{parentName:"ol"},"Source URL")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"go-task new -- tree https://gitlab.com/OldManProgrammer/unix-tree/-/archive/2.1.1/unix-tree-2.1.1.tar.gz\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"go-task new")," command will automatically place the new ",(0,i.kt)("inlineCode",{parentName:"p"},"package.yml")," in the proper directory according the package name, ",(0,i.kt)("em",{parentName:"p"},"and will overwrite any existing ",(0,i.kt)("inlineCode",{parentName:"em"},"package.yml")," file at that location"),"."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"You can, of course, create your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.yml")," file entirely from scratch, but ",(0,i.kt)("inlineCode",{parentName:"p"},"go-task new")," will give you a better starting point. We recommend using the ",(0,i.kt)("inlineCode",{parentName:"p"},"go-task new")," command.")),(0,i.kt)("p",null,"Now you should have a ",(0,i.kt)("inlineCode",{parentName:"p"},"package.yml")," file that looks something like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name       : unix-tree\nversion    : 2.1.1\nrelease    : 1\nsource     :\n    - https://gitlab.com/OldManProgrammer/unix-tree/-/archive/2.1.1/unix-tree-2.1.1.tar.gz : bcd2a0327ad40592a9c43e09a4d2ef834e6f17aa9a59012a5fb1007950b5eced\nhomepage   : PLEASE FILL ME IN\nlicense    : GPL-2.0-or-later # CHECK ME\ncomponent  : PLEASE FILL ME IN\nsummary    : PLEASE FILL ME IN\ndescription: |\n    PLEASE FILL ME IN\nbuilddeps  :\nsetup      : |\n    %configure\nbuild      : |\n    %make\ninstall    : |\n    %make_install\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"go-task new")," command has filled many fields for us, but not all of them will be right, and some of them need to be filled in. Refer to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/packaging/package.yml"},"package.yml page")," to see how each field should be used."),(0,i.kt)("p",null,"For this example, we need to fix the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The name needs to be ",(0,i.kt)("inlineCode",{parentName:"li"},"tree"),", so update it."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"license")," is correct, so we remove the comment."),(0,i.kt)("li",{parentName:"ul"},"Fill in ",(0,i.kt)("inlineCode",{parentName:"li"},"homepage"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"component"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"summary"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"description"),"."),(0,i.kt)("li",{parentName:"ul"},"Remove ",(0,i.kt)("inlineCode",{parentName:"li"},"builddeps"),". This package has no build dependencies beyond the ones already available for every package (the ",(0,i.kt)("inlineCode",{parentName:"li"},"system.devel")," packages)."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"setup")," step is not required, remove it."),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"install")," key, we can't use the ",(0,i.kt)("inlineCode",{parentName:"li"},"%make_install")," macro for this package. The files are installed in their correct locations individually.")),(0,i.kt)("p",null,"After updating the file, it will now look like:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"name       : tree\nversion    : 2.1.1\nrelease    : 1\nsource     :\n    - https://gitlab.com/OldManProgrammer/unix-tree/-/archive/2.1.1/unix-tree-2.1.1.tar.gz : bcd2a0327ad40592a9c43e09a4d2ef834e6f17aa9a59012a5fb1007950b5eced\nhomepage   : https://gitlab.com/OldManProgrammer/unix-tree\nlicense    : GPL-2.0-or-later\ncomponent  : system.utils\nsummary    : list contents of directories in a tree-like format.\ndescription: |\n    Tree is a recursive directory listing command that produces a depth indented listing of files, which is colorized ala dircolors if the LS_COLORS environment variable is set and output is to tty\nbuild      : |\n    %make\ninstall    : |\n    install -Dm00664 $workdir/doc/tree.1 $installdir/usr/share/man/man1/tree.1\n    install -Dm00755 $workdir/tree $installdir/usr/bin/tree\n")),(0,i.kt)("p",null,"To read more about finding and including dependencies and other parts of ",(0,i.kt)("inlineCode",{parentName:"p"},"package.yml")," please see ",(0,i.kt)("a",{parentName:"p",href:"/docs/packaging/packaging-practices"},"Packaging Practices"),"."),(0,i.kt)("p",null,"Understanding how to translate source code into a good ",(0,i.kt)("inlineCode",{parentName:"p"},"package.yml")," file is the heart of packaging. If you are stumped, or have questions, ",(0,i.kt)("strong",{parentName:"p"},"ask for help in our Solus Packaging room on ",(0,i.kt)("a",{parentName:"strong",href:"/docs/user/contributing/getting-involved#matrix-chat"},"Matrix"),".")),(0,i.kt)("h2",{id:"build-the-package"},"Build the Package"),(0,i.kt)("p",null,"Build the package with ",(0,i.kt)("inlineCode",{parentName:"p"},"go-task"),".\nOnce the build completes, your directory should now include the following files:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"\u251c\u2500\u2500 abi_used_libs\n\u251c\u2500\u2500 abi_used_symbols\n\u251c\u2500\u2500 package.yml\n\u251c\u2500\u2500 pspec_x86_64.xml\n\u2514\u2500\u2500 tree-2.1.1-1-1-x86_64.eopkg\n")),(0,i.kt)("p",null,"All these files ",(0,i.kt)("em",{parentName:"p"},"except")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"*eopkg")," file(s) should be included in your pull request. You will remove the ",(0,i.kt)("inlineCode",{parentName:"p"},".eopkg")," files after testing the package."),(0,i.kt)("p",null,"Once your package has built successfully, you will need to ",(0,i.kt)("a",{parentName:"p",href:"testing-a-package"},"test it"),"."),(0,i.kt)("h2",{id:"commit-your-changes"},"Commit your Changes"),(0,i.kt)("p",null,"Check the ",(0,i.kt)("a",{parentName:"p",href:"git-basics"},"changes in your files"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/docs/packaging/git-basics"},"Add / remove files as necessary to the commit"),". Then, ",(0,i.kt)("strong",{parentName:"p"},"check your branch"),"."),(0,i.kt)("p",null,"Run ",(0,i.kt)("inlineCode",{parentName:"p"},"git status"),". Make sure all the files you changed are staged, and that there are no untracked files. When all is well, run ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit"),"."),(0,i.kt)("h3",{id:"commit-message-format-for-new-packages"},"Commit message format for new packages"),(0,i.kt)("p",null,"There should be a summary line (with the package name), a blank line, and then the rest of the commit message."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"There should at the minimum be a summary and Test Plan."),(0,i.kt)("li",{parentName:"ul"},"Bullet point lists should start with a dash.")),(0,i.kt)("p",null,"Here is an example in our standard format (make sure to check the box in the checklist):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tree: initial inclusion in the repository\n\n**Summary**\n\nAdd the tree package, which recursively lists directories in a tree like manner.\n\n**Test Plan**\n\n- Launched the application\n- Exercised the UI\n- Exercised some feature\n\n**Checklist**\n\n- [] Package was built and tested against unstable\n")),(0,i.kt)("p",null,"For more information on suitable commit messages, please check the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/solus-project/tooling-central/blob/master/README.rst#using-git"},"tooling central documentation"),"."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you want to link this pull request to an existing package request, simply mention it in your commit message (use the full URL): ",(0,i.kt)("inlineCode",{parentName:"li"},"The inclusion of <somepackage> resolves https://github.com/getsolus/packages/issues/123")),(0,i.kt)("li",{parentName:"ul"},"If you need a change to depend on another change, mention it in the commit message too (use the full URL): ",(0,i.kt)("inlineCode",{parentName:"li"},"Depends on https://github.com/getsolus/packages/issues/234"))),(0,i.kt)("p",null,"Next, you'll ",(0,i.kt)("a",{parentName:"p",href:"/docs/packaging/submitting-a-pull-request"},"submit a pull request for review"),"."))}u.isMDXComponent=!0}}]);