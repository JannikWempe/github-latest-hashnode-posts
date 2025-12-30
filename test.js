const readmeContent = `# Hi 👋🏼

## Latest Blog Posts

<!-- HASHNODE_POSTS:START -->
<!-- HASHNODE_POSTS:END -->

## Recent GitHub Activity

<!--START_SECTION:activity-->
`;

const formattedPosts = `<table>
<tr>
		<td><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1692431209248/be1eb663-95a1-4e4c-a020-0016709134c5.png" width="500" height="auto" /></td>
		<td>
			<sup>2023-08-19T07:49:14.318Z</sup><br />
			<b>Podcast Notes: Minimal Empires</b>
			<p>💁 I will update this post if I have notes for new episodes.   By Sumit Kumar who is the founder of Parqet and has previously worked at Stripe.  Today, all it takes is the internet to build a business empire that completely changes our lives - we jus...</p>
		</td>
	</tr>
<tr>
		<td><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1682847180351/28c62519-991c-4ad9-9338-b0433a524e07.png" width="500" height="auto" /></td>
		<td>
			<sup>2023-04-30T09:37:37.965Z</sup><br />
			<b>Create Your Personal, Pay-Per-Use ChatGPT Client in Minutes</b>
			<p>I was hesitant to purchase ChatGPT Pro. While I often use ChatGPT, the $20 per month price tag seemed excessive for my needs. However, the slow response time and limited availability were frustrating. I appreciate the serverless, pay-per-use approach...</p>
		</td>
	</tr>
<tr>
		<td><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1674676741389/9ef44422-0a77-4afd-86c5-c1bdc78ca582.png" width="500" height="auto" /></td>
		<td>
			<sup>2023-01-25T19:57:02.440Z</sup><br />
			<b>You Have Fucked Up! How to git revert?</b>
			<p>You have messed up production. All hell broke loose. What to do now? Fix it as fast as possible and undo the last change that made everything fall apart to unblock further deployments. Fix Production Fast First of all, it is a good idea to get back t...</p>
		</td>
	</tr>
<tr>
		<td><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1670998381200/knD6Ik8oS.png" width="500" height="auto" /></td>
		<td>
			<sup>2022-12-14T06:14:41.385Z</sup><br />
			<b>How To Use GitHub Actions for Deployments When Following Trunk-Based Development</b>
			<p>Nowadays trunk-based development as a branching model is preferred compared to something like Git Flow. But creating a CI/CD pipeline is more challenging since we deploy to every environment from the same branch. In this post, I create a CI/CD pipeli...</p>
		</td>
	</tr>
<tr>
		<td><img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1667127130481/ibn1OU0_N.png" width="500" height="auto" /></td>
		<td>
			<sup>2022-10-30T10:40:11.057Z</sup><br />
			<b>My thoughts after trying to port a Shopify store from NextJS to Shopify Hydrogen</b>
			<p>EDIT (2022-10-31): Just one day after publishing this post, there is a huge announcement: Remix joins Shopify and Hydrogen v2 will be leveraging Remix. Also, there is a great thread on Twitter about design mistakes being made in Hydrogen v1: https://...</p>
		</td>
	</tr>
</table>`;

const openingComment = `<!-- HASHNODE_POSTS:START -->`;
const closingComment = `<!-- HASHNODE_POSTS:END -->`;

const regex = new RegExp(`${openingComment}([\\s\\S]*?)${closingComment}`, 'g');
const newReadmeContent = readmeContent.replace(regex, `${openingComment}\n${formattedPosts}\n${closingComment}`);

console.log(newReadmeContent);
