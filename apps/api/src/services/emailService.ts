export function buildEmailPayload(to: string, subject: string, html: string) {
 return { to, subject, html }
}
